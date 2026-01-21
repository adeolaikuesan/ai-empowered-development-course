# Module 8: Language Server Protocol (LSP)

## What You'll Learn
- Understand what LSP is and how it provides semantic code understanding
- Learn how LSP enhances agent capabilities
- Configure and use LSP with Claude Code

---

## What is LSP?

**LSP is a standard for editors to understand code semantically.** Instead of every editor reimplementing language features for each language, one language server works with all editors.

```
Before: 10 editors × 5 languages = 50 implementations
After:  10 editors + 5 languages = 15 implementations
```

> [!TIP]
> LSP enables code intelligence across all editors without duplicate implementation work.

---

## Why It Matters for Agents

Without LSP, agents treat code as text—pattern matching and guessing. With LSP, agents get **semantic understanding**:

### Code Intelligence

- Type information and function signatures
- Definitions and references across files
- Real-time error detection
- Safe refactoring (knows exactly what will change)

### The Combination

| Technology | What It Provides |
|-----------|------------------|
| **MCP** | Gives agents access to tools and data |
| **LSP** | Gives agents understanding of code |

---

## How Agents Use LSP

| Without LSP | With LSP |
|-------------|----------|
| Parse code manually | Ask language server |
| Guess types and structure | Get accurate semantic info |
| Text-based search | Find all references |
| Risk breaking changes | Know impact before changing |

### Example: Renaming a Function

**Without LSP:** Text search-and-replace (might miss things, break code)

**With LSP:** Uses "rename symbol" and updates every reference correctly across all files

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **LSP Standard** | One language server works with all editors |
| **Semantic Understanding** | Agents understand code structure, not just text |
| **Code Intelligence** | Type info, definitions, references, error detection |
| **MCP + LSP** | Tools/data access + code understanding = powerful agents |

---

## Exercise: Explore Code with LSP

| | |
|---|---|
| **Goal** | See how language servers provide semantic understanding |
| **Concepts** | LSP configuration, semantic analysis, safe refactoring |

### Steps

1. Install TypeScript Language Server
   ```bash
   npm install -g typescript-language-server typescript
   ```

2. Configure in Claude Code settings:
   ```json
   {
     "lsp": {
       "typescript": {
         "command": "typescript-language-server",
         "args": ["--stdio"]
       }
     }
   }
   ```

3. Restart Claude Code

4. Try these commands with Claude:
   ```
   Show me all functions and their signatures in src/App.tsx

   Find all places where [function_name] is called

   What type errors does the language server report?

   What are the inferred types for variables in this file?
   ```

5. Ask Claude to refactor something and observe how it uses LSP to ensure safety

### Acceptance Criteria
- [ ] TypeScript Language Server is installed
- [ ] LSP is configured in Claude Code settings
- [ ] Claude provides accurate type information
- [ ] Claude finds all references correctly
- [ ] Claude suggests safe refactorings using LSP
- [ ] You understand how LSP enhances agent capabilities

> [!NOTE]
> **Bonus challenge**: Ask Claude to trace a variable's type through multiple function calls

---

← [Previous: QA and Pull Requests](7-qa-and-pull-requests.md) | [Next: Transforming & Structuring Data →](9-transforming-structuring-data.md)
