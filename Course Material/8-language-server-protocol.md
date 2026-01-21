# Language Server Protocol (LSP)

## What is LSP?

**LSP is a standard for editors to understand code semantically.** Instead of every editor reimplementing language features for each language, one language server works with all editors.

```
Before: 10 editors × 5 languages = 50 implementations
After:  10 editors + 5 languages = 15 implementations
```

## Why It Matters for Agents

Without LSP, agents treat code as text—pattern matching and guessing. With LSP, agents get **semantic understanding**:

**Code intelligence:**
- Type information and function signatures
- Definitions and references across files
- Real-time error detection
- Safe refactoring (knows exactly what will change)

**The combination:**
- MCP gives agents access to tools and data
- LSP gives agents understanding of code

## How Agents Use LSP

| Without LSP | With LSP |
|-------------|----------|
| Parse code manually | Ask language server |
| Guess types and structure | Get accurate semantic info |
| Text-based search | Find all references |
| Risk breaking changes | Know impact before changing |

**Example:** An agent renaming a function. Without LSP, it does a text search-and-replace (might miss things, break code). With LSP, it uses "rename symbol" and updates every reference correctly across all files.

## Exercise: Explore Code with LSP ⭐⭐⭐

**Goal**: See how language servers provide semantic understanding

**Steps**:

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

**Success**: Claude provides accurate type information, finds all references correctly, and suggests safe refactorings

**Bonus**: Ask Claude to trace a variable's type through multiple function calls
