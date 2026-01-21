# Module 6: Advanced Planning with Speckit

## What You'll Learn
- Understand Spec-Driven Development methodology
- Learn when to use SpecKit vs simple planning
- Apply SpecKit's workflow to complex features

---

## What is SpecKit?

SpecKit is a toolkit for **Spec-Driven Development**—specs become executable artifacts that generate working code.

> [!TIP]
> SpecKit analyzes your codebase and respects existing patterns automatically.

---

## When to Use Speckit

| Use Case | Tool |
|----------|------|
| Simple tasks | `/plan` |
| Complex features, multi-file changes | SpecKit |
| New projects | SpecKit full workflow |
| Existing codebases | SpecKit with context analysis |

---

## Core Commands

### Workflow

1. **`/speckit.constitution`** - Project principles
2. **`/speckit.specify`** - Define requirements (what/why)
3. **`/speckit.plan`** - Technical plan (how)
4. **`/speckit.tasks`** - Generate task breakdown
5. **`/speckit.implement`** - Execute tasks

### Optional Commands

- **`/speckit.clarify`** - Fill spec gaps with targeted questions
- **`/speckit.analyze`** - Cross-check consistency before implementing

---

## Example: New Project

```bash
/speckit.constitution Create principles for code quality and testing
/speckit.specify Build auth system with OAuth2 and password reset
/speckit.plan Use Express.js, PostgreSQL, JWT
/speckit.tasks
/speckit.implement
```

---

## Example: Existing Codebase

```bash
/speckit.specify Add dark mode toggle with persistence
/speckit.plan Follow existing Redux patterns, integrate with ThemeContext
/speckit.tasks
/speckit.implement
```

> [!NOTE]
> SpecKit analyzes your codebase and respects existing patterns automatically.

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **Spec-Driven Development** | Specs become executable artifacts |
| **When to Use** | Complex features with multi-file changes |
| **Workflow** | Constitution → Specify → Plan → Tasks → Implement |
| **Codebase Analysis** | Automatically respects existing patterns |

---

## Exercise: Add Priority System

| | |
|---|---|
| **Goal** | Plan and implement a priority system with visual indicators |
| **Concepts** | Advanced planning, SpecKit workflow, systematic implementation |

### Steps

1. Create the plan:
   ```bash
   /plan Add priority system (High/Medium/Low) with visual indicators and sorting
   ```

2. Review the plan—check files, approach, edge cases

3. Approve or request changes

4. Implement the feature

5. Test implementation

### Acceptance Criteria
- [ ] Plan reviewed and approved
- [ ] Priority system implemented (High/Medium/Low)
- [ ] Visual indicators display correctly for each priority
- [ ] Filtering by priority works
- [ ] Sorting by priority works
- [ ] Existing functionality remains intact

> [!NOTE]
> **Alternative exercises**: Implement edit functionality, or add categories/tags with colors

---

← [Previous: Task Orchestration with VibeKanban](5-task-orchestration-vibekanban.md) | [Next: QA and Pull Requests →](7-qa-and-pull-requests.md)
