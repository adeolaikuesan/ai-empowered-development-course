# Getting Started

## Prerequisites

You'll need:
- An IDE ([Cursor](https://cursor.com), VSCode, or terminal-only)
- Access to Claude (via Netlight's AWS Bedrock)

## Installing Claude Code

Claude Code is Anthropic's official CLI for working with Claude as a coding agent.

**Setup:** https://docs.chat.netlight.com/guide/codepilot/tools/claude-code

## Exercise: Run the TODO App ⭐

**Goal**: Get the TODO app running locally to verify your setup works

**Steps**:

1. Clone and navigate to the repository
   ```bash
   git clone https://github.com/RBirkeland/vibe-code-demo
   cd vibe-code-demo
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the app at the URL shown (typically `http://localhost:5173`)

5. Test: add a todo, mark it complete, delete it, try the filter buttons

**Success**: App loads without errors and all basic features (add, complete, delete, filter) work
