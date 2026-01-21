# Advanced Planning with Speckit

SpecKit is a toolkit for **Spec-Driven Development**—specs become executable artifacts that generate working code.

## When to Use Speckit

| Use Case | Tool |
|----------|------|
| Simple tasks | `/plan` |
| Complex features, multi-file changes | SpecKit |
| New projects | SpecKit full workflow |
| Existing codebases | SpecKit with context analysis |

## Core Commands

**Workflow:**
1. `/speckit.constitution` - Project principles
2. `/speckit.specify` - Define requirements (what/why)
3. `/speckit.plan` - Technical plan (how)
4. `/speckit.tasks` - Generate task breakdown
5. `/speckit.implement` - Execute tasks

**Optional:**
- `/speckit.clarify` - Fill spec gaps with targeted questions
- `/speckit.analyze` - Cross-check consistency before implementing

## Example: New Project

```
/speckit.constitution Create principles for code quality and testing
/speckit.specify Build auth system with OAuth2 and password reset
/speckit.plan Use Express.js, PostgreSQL, JWT
/speckit.tasks
/speckit.implement
```

## Example: Existing Codebase

```
/speckit.specify Add dark mode toggle with persistence
/speckit.plan Follow existing Redux patterns, integrate with ThemeContext
/speckit.tasks
/speckit.implement
```

SpecKit analyzes your codebase and respects existing patterns.

## Exercise: Add Priority System ⭐⭐⭐⭐

```
/plan Add priority system (High/Medium/Low) with visual indicators and sorting
```

1. Review the plan—check files, approach, edge cases
2. Approve or request changes
3. Test: priorities display correctly, filtering works, sorting works

**Alternatives**: Edit functionality, categories/tags with colors
