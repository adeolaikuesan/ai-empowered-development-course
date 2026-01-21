# Module 4: Safety and Guardrails

## What You'll Learn
- Understand why guardrails are essential for autonomous agents
- Learn the difference between sandboxing and SafetyNet
- Configure custom safety rules for your projects

---

## Why Guardrails Matter

In autonomous mode (YOLO), agents execute commands without asking. Without guardrails, they could delete files, force push to main, or run destructive database commands.

> [!WARNING]
> Agents in autonomous mode can execute destructive operations. Always use guardrails in production workflows.

---

## Sandboxing (Minimal)

```bash
/sandbox
```

Limits file access and restricts commands to a safe subset. Doesn't cover remote calls.

**Learn more:**
- [Sandbox Documentation](https://docs.anthropic.com/en/docs/claude-code/sandbox) - Official sandbox mode guide

---

## SafetyNet (Recommended)

SafetyNet uses **semantic command analysis** to block destructive operations. Unlike pattern-based deny rules, it understands command structure—can't be bypassed by flag reordering or shell wrappers.

### What SafetyNet Blocks

| Command Type | Examples |
|--------------|----------|
| **Destructive git** | `git reset --hard`, `git push --force`, `git checkout --` |
| **File deletion** | `rm -rf` outside temp/cwd |
| **Hidden commands** | Destructive commands in `bash -c`, `python -c`, etc. |

### Installation

```bash
/plugin marketplace add kenryu42/cc-marketplace
/plugin install safety-net@cc-marketplace
```

Then restart Claude Code.

### Verify Installation

```bash
npx cc-safety-net doctor
```

### When Blocked

```
BLOCKED by Safety Net

Reason: git checkout -- discards uncommitted changes permanently.
        Use 'git stash' first.

Command: git checkout -- src/main.py
```

**Learn more:**
- [Safety Net Repository](https://github.com/kenryu42/claude-code-safety-net) - Full documentation and advanced modes

---

## Custom Rules

Add project-specific rules with `/set-custom-rules` or create `.safety-net.json`:

```json
{
  "version": 1,
  "rules": [
    {
      "name": "block-git-add-all",
      "command": "git",
      "subcommand": "add",
      "block_args": ["-A", "--all", "."],
      "reason": "Use 'git add <specific-files>' instead."
    }
  ]
}
```

> [!NOTE]
> For complex validation logic, use [Claude Code Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks).

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **Guardrails** | Essential for autonomous agents to prevent destructive operations |
| **Sandboxing** | Minimal protection, limits file access and commands |
| **SafetyNet** | Recommended, uses semantic analysis to block destructive commands |
| **Custom Rules** | Tailor safety rules to your project's specific needs |

---

## Exercise: Test SafetyNet Protection

| | |
|---|---|
| **Goal** | Test safety mechanisms and understand their importance |
| **Concepts** | Autonomous agent safety, semantic command analysis, custom rules |

### Steps

1. Ensure SafetyNet is installed
   ```bash
   /plugin install safety-net@cc-marketplace
   ```

2. Restart Claude Code

3. Intentionally trigger SafetyNet:
   ```
   Create a backup branch, then reset the main branch to 3 commits ago
   ```

4. Observe SafetyNet blocking the dangerous `git reset --hard`

5. Ask Claude to implement a safer approach

6. Create a custom rule to block `git add .`:
   ```bash
   /set-custom-rules
   ```

7. Add a rule requiring specific files instead of blanket adds

8. Test the custom rule by asking Claude to add all files

### Acceptance Criteria
- [ ] SafetyNet is installed and verified
- [ ] SafetyNet successfully blocks dangerous git operations
- [ ] Claude suggests safer alternatives when blocked
- [ ] Custom rule is created and working
- [ ] Custom rule blocks `git add .` as configured

> [!NOTE]
> **Bonus challenge**: Add "Edit Todo" functionality (click to edit text) using the safety guardrails

---

← [Previous: Model Context Protocol](3-model-context-protocol.md) | [Next: Task Orchestration with VibeKanban →](5-task-orchestration-vibekanban.md)
