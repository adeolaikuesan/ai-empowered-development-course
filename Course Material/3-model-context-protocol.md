# Module 3: Model Context Protocol (MCP)

## What You'll Learn
- Understand what MCP is and why it matters
- Learn how MCP servers provide tools and resources to AI agents
- Use Context7 MCP to fetch documentation and implement features

---

## What is MCP?

**MCP is an API standard for AIs.** A universal adapter between AI models and tools.

```
Before: 3 models × 5 tools = 15 custom integrations
After:  3 models + 5 tools = 8 implementations
```

> [!TIP]
> Build a database server once, any MCP-compatible model can use it.

---

## How It Works

An MCP server announces its capabilities. The AI asks what's available, then uses those tools. **The server controls the boundaries**—it validates inputs, checks permissions, enforces rate limits.

### MCP Components

| Component | Description |
|-----------|-------------|
| **Tools** | Functions the agent can call (`query_database`, `send_email`) |
| **Resources** | Data the agent can read (docs, schemas, logs) |
| **Safety** | Agents only get specific capabilities they need. Everything is logged |

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **MCP Standard** | Universal adapter between AI models and tools |
| **Benefits** | Build once, use with any MCP-compatible model |
| **Control** | Server validates inputs, checks permissions, enforces rate limits |
| **Safety** | Agents get only what they need; all actions are logged |

---

## Exercise: Add a Date Library with Context7 MCP

| | |
|---|---|
| **Goal** | Use Context7 MCP to fetch documentation and implement a feature |
| **Concepts** | MCP integration, documentation retrieval, library implementation |

### Steps

1. Ensure Context7 MCP is installed
   ```bash
   claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
   ```
   (Get your API key from [context7.com](https://context7.com))

2. Restart Claude Code to load the MCP

3. Ask Claude to use Context7:
   ```
   Using Context7, show me how to use date-fns to format dates
   ```

4. Review the documentation Claude retrieves from Context7

5. Ask Claude to add due date functionality:
   ```
   Add due dates to todos using date-fns. Each todo should have an optional
   due date that's formatted nicely. Allow sorting by due date.
   ```

6. Test: Add todos with and without due dates, verify formatting and sorting

### Acceptance Criteria
- [ ] Context7 MCP is properly installed and working
- [ ] Todos have optional due dates
- [ ] Dates are formatted nicely using date-fns
- [ ] Can sort todos by due date
- [ ] date-fns library is properly integrated

> [!NOTE]
> **Alternative exercise**: Use Context7 to research and implement Chart.js for todo statistics visualization

---

← [Previous: Working with AI Agents](2-working-with-ai-agents.md) | [Next: Safety and Guardrails →](4-safety-and-guardrails.md)
