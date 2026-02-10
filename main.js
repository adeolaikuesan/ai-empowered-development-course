import { VibeKanbanWebCompanion } from 'vibe-kanban-web-companion';
import { format, parse, isBefore, isSameDay, compareAsc } from 'date-fns';

// Todos array (Feature 1)
let todos = [];
let nextId = 1;

// Current filter (Feature 2)
let currentFilter = 'all';

// Current sort mode
let currentSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
    init();
    initVibeKanban();
});

function init() {
    // Restore todos from localStorage
    loadTodosFromStorage();

    // Wire up add button
    const addBtn = document.getElementById('addBtn');
    const todoInput = document.getElementById('todoInput');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    // Wire up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.dataset.filter));
    });

    // Wire up sort buttons
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => setSortMode(btn.dataset.sort));
    });

    // Wire up date toggle button
    const dateToggleBtn = document.getElementById('dateToggleBtn');
    dateToggleBtn.addEventListener('click', toggleDateInput);

    renderTodos();
}

function initVibeKanban() {
    const companion = new VibeKanbanWebCompanion();
    companion.render(document.body);
}

// Feature 1: Add, toggle, delete todos
function addTodo() {
    const input = document.getElementById('todoInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const text = input.value.trim();

    if (text === '') return;

    const dueDate = dueDateInput.value || null;

    todos.push({
        id: nextId++,
        text: text,
        completed: false,
        dueDate: dueDate
    });

    input.value = '';
    dueDateInput.value = '';
    dueDateInput.classList.add('hidden');
    renderTodos();
    saveTodosToStorage();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        saveTodosToStorage();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
    saveTodosToStorage();
}

// Feature 1: Render todos
function renderTodos() {
    const todoList = document.getElementById('todoList');
    let displayTodos = getFilteredTodos();

    // Apply sorting
    if (currentSort === 'dueDate') {
        displayTodos = sortTodosByDueDate(displayTodos);
    }

    todoList.innerHTML = '';

    displayTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (todo.completed) li.classList.add('completed');

        // Add overdue class if todo has overdue due date
        if (todo.dueDate && isOverdue(todo.dueDate)) {
            li.classList.add('overdue');
        }

        const dueDateHtml = todo.dueDate ? `<span class="todo-due-date">${formatDueDate(todo.dueDate)}</span>` : '';

        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            ${dueDateHtml}
            <button class="todo-delete">Delete</button>
        `;

        li.querySelector('.todo-checkbox').addEventListener('change', () => toggleTodo(todo.id));
        li.querySelector('.todo-delete').addEventListener('click', () => deleteTodo(todo.id));

        todoList.appendChild(li);
    });
}

// Feature 2: Filter todos based on current filter
function getFilteredTodos() {
    if (currentFilter === 'active') {
        return todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        return todos.filter(t => t.completed);
    }
    return todos; // 'all'
}

// Feature 2: Set filter and update UI
function setFilter(filter) {
    currentFilter = filter;

    // Update button styling
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderTodos();
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Storage Utility Functions
function saveTodosToStorage() {
    try {
        localStorage.setItem('app_todos', JSON.stringify(todos));
        localStorage.setItem('app_nextId', JSON.stringify(nextId));
    } catch (error) {
        console.error('Failed to save todos to storage:', error);
    }
}

function loadTodosFromStorage() {
    try {
        const storedTodos = localStorage.getItem('app_todos');
        const storedNextId = localStorage.getItem('app_nextId');

        if (storedTodos) {
            todos = JSON.parse(storedTodos);
            // Migration: ensure dueDate property exists for backward compatibility
            todos = todos.map(todo => ({
                ...todo,
                dueDate: todo.dueDate || null
            }));
        }
        if (storedNextId) {
            nextId = JSON.parse(storedNextId);
        }
    } catch (error) {
        console.error('Failed to load todos from storage:', error);
        todos = [];
        nextId = 1;
        localStorage.removeItem('app_todos');
        localStorage.removeItem('app_nextId');
    }
}

function clearStorage() {
    try {
        localStorage.removeItem('app_todos');
        localStorage.removeItem('app_nextId');
        todos = [];
        nextId = 1;
    } catch (error) {
        console.error('Failed to clear storage:', error);
    }
}

// Due date helper functions
function toggleDateInput() {
    const dueDateInput = document.getElementById('dueDateInput');
    dueDateInput.classList.toggle('hidden');
    if (!dueDateInput.classList.contains('hidden')) {
        dueDateInput.focus();
    }
}

function formatDueDate(dateString) {
    if (!dateString) return '';
    const dueDate = parse(dateString, 'yyyy-MM-dd', new Date());
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isSameDay(dueDate, today)) {
        return 'Today';
    }

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (isSameDay(dueDate, tomorrow)) {
        return 'Tomorrow';
    }

    if (isBefore(dueDate, today)) {
        return 'Overdue';
    }

    return format(dueDate, 'MMM d, yyyy');
}

function isOverdue(dateString) {
    if (!dateString) return false;
    const dueDate = parse(dateString, 'yyyy-MM-dd', new Date());
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return isBefore(dueDate, today);
}

function sortTodosByDueDate(todosToSort) {
    return todosToSort.sort((a, b) => {
        // Todos with due dates come first, sorted by date
        if (a.dueDate && b.dueDate) {
            return compareAsc(parse(a.dueDate, 'yyyy-MM-dd', new Date()), parse(b.dueDate, 'yyyy-MM-dd', new Date()));
        }
        // Todos with due dates come before todos without
        if (a.dueDate) return -1;
        if (b.dueDate) return 1;
        // Both without due dates, maintain original order
        return 0;
    });
}

function setSortMode(mode) {
    currentSort = mode;

    // Update button styling
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.sort === mode) {
            btn.classList.add('active');
        }
    });

    renderTodos();
}
