# Module 5: Task Orchestration with VibeKanban

## What You'll Learn
- Set up VibeKanban for multi-agent task execution
- Create tickets from planning sessions
- Run multiple agents in parallel and handle merge conflicts

---

## Setting Up VibeKanban

VibeKanban is a Kanban board for multi-agent task execution.

```bash
npx vibe-kanban                                    # Start board
claude mcp add vibe-kanban -- npx vibe-kanban-mcp  # Add MCP
```

> [!NOTE]
> Restart Claude Code after adding the MCP to load it properly.

**Learn more:**
- [VibeKanban Documentation](https://www.vibekanban.com/docs/agents/claude-code) - Full setup and usage guide

---

## Creating Tickets from Plans

After creating a plan, ask Claude:
```
Write detailed tickets for all tasks and add them to VibeKanban
```

Claude will break down your plan into discrete, trackable tickets on the Kanban board.

---

## Running Multiple Agents in Parallel

Each agent picks up a ticket, creates a feature branch, and opens a PR when done.

```
Start working on all parallelizable tasks marked with [P]
```

### Before Parallel Execution

> [!WARNING]
> Configure SafetyNet before parallel execution—agents run in YOLO mode.

| Consideration | Details |
|--------------|---------|
| **Safety** | Configure SafetyNet (agents run autonomously) |
| **Dependencies** | Serial tasks wait automatically; only parallel tasks run concurrently |
| **Conflicts** | Be prepared to handle merge conflicts when PRs overlap |

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **VibeKanban** | Kanban board for multi-agent task execution |
| **Tickets** | Convert plans into trackable, discrete tickets |
| **Parallel Execution** | Multiple agents work simultaneously on independent tasks |
| **Safety First** | Always configure SafetyNet before running parallel agents |

---

## Exercise: Implement 3 Features in Parallel

| | |
|---|---|
| **Goal** | Run multiple agents in parallel and handle merge conflicts |
| **Concepts** | Multi-agent coordination, parallel execution, merge conflict resolution |

### Choose 3 Features

Select 3 features to implement:
1. Search/Filter by Text
2. Dark Mode Toggle
3. Bulk Operations (Select All, Delete Completed, Mark All Complete)
4. Drag-and-Drop Reordering
5. Export/Import JSON
6. Keyboard Shortcuts
7. Todo Details/Notes
8. Undo/Redo

### Steps

1. Create a plan:
   ```bash
   /plan Implement these 3 features: [your choices]
   ```

2. Create VibeKanban tickets from the plan

3. Start parallel execution

4. Handle merge conflicts when PRs overlap

5. Test features individually, then together

### Acceptance Criteria
- [ ] 3 features are selected and planned
- [ ] VibeKanban tickets created for all tasks
- [ ] Multiple agents run in parallel successfully
- [ ] At least 1 merge conflict is identified and resolved
- [ ] All 3 features work correctly individually
- [ ] All 3 features work together without conflicts

---

← [Previous: Safety and Guardrails](4-safety-and-guardrails.md) | [Next: Advanced Planning with Speckit →](6-advanced-planning-speckit.md)
