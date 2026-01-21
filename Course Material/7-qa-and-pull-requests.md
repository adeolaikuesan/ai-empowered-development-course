# Module 7: QA and Pull Requests

## What You'll Learn
- Understand how agents create PRs automatically
- Use AI-assisted code review for quality assurance
- Set up automated PR review tools

---

## Automated PR Creation

Agents create PRs automatically following this workflow:

```
branch → changes → commit → push → PR
```

Each step is handled autonomously, allowing you to focus on reviewing and approving rather than manual git operations.

---

## AI-Assisted Code Review

Use AI code review on AI-generated code—different models catch different errors.

> [!TIP]
> Using a different AI model for review helps catch issues the original model might miss.

### Recommended Tools

| Tool | Description |
|------|-------------|
| **[Greptile](https://greptile.com)** | Recommended - Deep codebase understanding |
| **CodeRabbit** | Alternative with strong analysis capabilities |

### Setup

Connect your GitHub repository to the tool of your choice. PRs will be reviewed automatically when created.

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **Automated PRs** | Agents handle branch → changes → commit → push → PR |
| **AI Review** | Different AI models catch different types of errors |
| **Tools** | Greptile (recommended) or CodeRabbit for automated review |
| **Setup** | Connect GitHub repo once, reviews happen automatically |

---

## Exercise: Review with AI Assistance

| | |
|---|---|
| **Goal** | Set up automated AI code review and understand its benefits |
| **Concepts** | PR workflow, automated code review, quality assurance |

### Steps

1. Set up Greptile on your repository
   - Visit [greptile.com](https://greptile.com)
   - Connect your GitHub account
   - Select the vibe-code-demo repository

2. Create a PR with an agent-implemented feature

3. Review automated comments on your PR

4. Fix issues flagged by the review

5. Observe the review process and quality of feedback

### Acceptance Criteria
- [ ] Greptile is connected to your repository
- [ ] At least one PR has been created and reviewed
- [ ] Automated review comments appear on the PR
- [ ] Issues identified by AI are understood and addressed
- [ ] You understand the value of AI-assisted code review

---

← [Previous: Advanced Planning with Speckit](6-advanced-planning-speckit.md) | [Next: Language Server Protocol →](8-language-server-protocol.md)
