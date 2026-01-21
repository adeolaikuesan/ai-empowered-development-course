# Working with AI Agents

## 2.1 What Are Agents?

Think of an agent as a junior developer who can read code, make changes across files, run tests, and fix issues—all autonomously.

| Chat | Agent |
|------|-------|
| Answers questions | Takes action |
| Single turn | Multi-step reasoning |
| Gives suggestions | Makes changes |

**Key Capabilities:**
- Read and understand code across multiple files
- Make changes autonomously
- Run tests and fix issues
- Reason through multi-step problems
- Validate and iterate

**Limitations:**
- Agents make mistakes—always validate
- No memory between sessions
- Limited context window
- Work best with clear, specific instructions

## 2.2 The Importance of Planning

The biggest mistake: jumping straight into coding without a plan.

> Spend 80% planning, 20% executing

A good plan → one-shot solution. A bad plan → debugging loops and wasted tokens.

**If you can't one-shot it, fix the plan—not the code.**

**Why Planning Matters:**
- **Scope clarity** - Know what success looks like before starting
- **Risk identification** - Catch edge cases and gotchas early
- **Token efficiency** - One good plan saves hundreds of wasted tokens in debugging
- **One-shot execution** - Most common cause of failure is re-planning mid-execution

**Using Plan Mode:**

```
/plan Add user authentication with OAuth2
```

When you use `/plan`, Claude will:
1. Explore the codebase
2. Create a step-by-step plan
3. Wait for your approval before implementing

Always review the plan—add constraints, correct misunderstandings, clarify edge cases.

**Best Practices:**

1. **Be specific** - "Add a button" vs "Add a 'Save Draft' button in the header that auto-saves every 30 seconds"

2. **Give context** - Explain background, constraints, and what success looks like

3. **Break problems down** - Sequential, focused tasks beat asking for everything at once

4. **Ask "why"** - When an agent suggests something, ask it to explain. You'll catch errors.

## 2.3 Context Window Management

**The Problem:**
Models have lower performance when context becomes "noisy"—too much irrelevant information degrades reasoning. For Claude models, performance degrades significantly around **50% of context window (100k tokens)**—the "dumb zone" where the model struggles.

**Why It Happens:**
- Too much information increases noise-to-signal ratio
- Model attention gets diluted across irrelevant context
- Reasoning becomes less precise

**The Solution:**
Keep one context window focused on one task:

- **Use `/clear`** - Start fresh when switching tasks to prevent information bleed
- **Use sub-agents** - Process and compress large amounts of information before passing to main agent
  - Example: Agent A extracts key concepts from 50 documentation pages
  - Agent A returns concise summary
  - Main agent gets only what's needed, stays focused and performant
- **Selective context** - Only load files/docs relevant to current task
- **Separate concerns** - Documentation research, implementation, and testing in separate contexts

**Example Workflow:**
```
Task: Implement date picker with date-fns

❌ Bad:  Load all date-fns docs + entire codebase + tests → implement
✅ Good: Sub-agent searches date-fns docs → returns key API summary
         Main agent implements with focused context
```

## Exercise: Add localStorage Persistence ⭐⭐

**Goal**: Use Claude to add persistence so todos survive page refreshes

**Steps**:

1. Open Claude Code
   ```bash
   claude
   ```

2. Give Claude this prompt:
   ```
   Add localStorage persistence to the TODO app. When todos are added,
   completed, or deleted, save them to localStorage. When the app loads,
   restore todos from localStorage. Handle the case when localStorage is
   empty (first visit).
   ```

3. Review Claude's approach and let it implement

4. Test: Add todos, mark some complete, refresh the page

5. Verify todos persist with correct completed/incomplete states

6. Edge case test: Clear localStorage (DevTools → Application → Storage), refresh, verify empty list

**Success**: Todos persist across page refreshes with correct states, no errors in console

**Alternative** (if too easy): Add a "Clear Completed" button or todo count statistics
