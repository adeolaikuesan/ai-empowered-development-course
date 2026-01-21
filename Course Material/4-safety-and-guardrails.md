# Safety and Guardrails

## Why Guardrails Matter

In autonomous mode (YOLO), agents execute commands without asking. Without guardrails, they could delete files, force push to main, or run destructive database commands.

## Sandboxing (Minimal)

```
/sandbox
```

Limits file access and restricts commands to a safe subset. Doesn't cover remote calls. See [Sandbox docs](https://docs.anthropic.com/en/docs/claude-code/sandbox).

## SafetyNet (Recommended)

SafetyNet uses **semantic command analysis** to block destructive operations. Unlike pattern-based deny rules, it understands command structure—can't be bypassed by flag reordering or shell wrappers.

**Blocks:**
- `git reset --hard`, `git push --force`, `git checkout --`
- `rm -rf` outside temp/cwd
- Destructive commands hidden in `bash -c`, `python -c`, etc.

**Installation:**
```bash
/plugin marketplace add kenryu42/cc-marketplace
/plugin install safety-net@cc-marketplace
```
Then restart Claude Code.

**Verify:**
```bash
npx cc-safety-net doctor
```

**When blocked:**
```
BLOCKED by Safety Net

Reason: git checkout -- discards uncommitted changes permanently.
        Use 'git stash' first.

Command: git checkout -- src/main.py
```

For advanced modes and full docs: [Safety Net repository](https://github.com/kenryu42/claude-code-safety-net)

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

For complex validation logic, use [Claude Code Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks).

## Exercise: Test SafetyNet Protection ⭐⭐⭐

**Goal**: Test safety mechanisms and understand their importance

**Steps**:

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

**Success**: SafetyNet blocks dangerous operations, custom rule works

**Bonus**: Add "Edit Todo" functionality (click to edit text)
