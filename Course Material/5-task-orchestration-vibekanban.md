# Task Orchestration with VibeKanban

## Setting Up VibeKanban

VibeKanban is a Kanban board for multi-agent task execution. See [full docs](https://www.vibekanban.com/docs/agents/claude-code).

```bash
npx vibe-kanban                                    # Start board
claude mcp add vibe-kanban -- npx vibe-kanban-mcp  # Add MCP
```

Restart Claude Code to load the MCP.

## Creating Tickets from Plans

After creating a plan, ask Claude:
```
Write detailed tickets for all tasks and add them to VibeKanban
```

## Running Multiple Agents in Parallel

Each agent picks up a ticket, creates a feature branch, and opens a PR when done.

```
Start working on all parallelizable tasks marked with [P]
```

⚠️ **Before parallel execution:**
- Configure SafetyNet (agents run in YOLO mode)
- Dependencies are respected automatically—serial tasks wait

## Exercise: Implement 3 Features in Parallel ⭐⭐⭐⭐⭐

**Goal**: Run multiple agents in parallel, handle merge conflicts

**Choose 3 features:**
1. Search/Filter by Text
2. Dark Mode Toggle
3. Bulk Operations (Select All, Delete Completed, Mark All Complete)
4. Drag-and-Drop Reordering
5. Export/Import JSON
6. Keyboard Shortcuts
7. Todo Details/Notes
8. Undo/Redo

**Steps:**
1. `/plan Implement these 3 features: [your choices]`
2. Create VibeKanban tickets from the plan
3. Start parallel execution
4. Handle merge conflicts when PRs overlap
5. Test features individually, then together

**Success**: 3 features working together, at least 1 merge conflict resolved
