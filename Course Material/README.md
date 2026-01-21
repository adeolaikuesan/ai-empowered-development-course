# AI-Assisted Development Bootcamp

Welcome to the AI-Assisted Development Bootcamp! This collection of materials is designed to onboard and train consultants of different roles (engineering, product, design) in how to use AI-empowered development and AI tools to increase efficiency.

## Course Structure

This bootcamp is organized into nine comprehensive modules, each building on previous concepts. Below is an overview of each section with suggested progression:

### General Modules (Foundation)

These modules cover foundational concepts that apply to all roles:

1. **[Getting Started](1-getting-started.md)** ⭐
   - Prerequisites and setup
   - Installing Claude Code
   - Exercise: Run the TODO app locally
   - *Difficulty: Beginner*
   - *Time: ~15 minutes*

2. **[Working with AI Agents](2-working-with-ai-agents.md)** ⭐⭐
   - Understanding what agents are and their capabilities
   - The importance of planning and structured prompts
   - Context window management and optimization
   - Exercise: Add localStorage persistence to the TODO app
   - *Difficulty: Intermediate*
   - *Time: ~30-45 minutes*

3. **[Model Context Protocol (MCP)](3-model-context-protocol.md)** ⭐⭐⭐
   - What MCP is and why it matters
   - How MCP works with tools and resources
   - Exercise: Use Context7 MCP to add date-fns library
   - *Difficulty: Intermediate*
   - *Time: ~45-60 minutes*

4. **[Safety and Guardrails](4-safety-and-guardrails.md)** ⭐⭐⭐
   - Why guardrails matter in autonomous execution
   - Sandboxing and SafetyNet overview
   - Setting up custom safety rules
   - Exercise: Test SafetyNet protection
   - *Difficulty: Intermediate*
   - *Time: ~30 minutes*

### Engineering Specific

These modules are designed for engineers implementing features and managing code quality:

5. **[Task Orchestration with VibeKanban](5-task-orchestration-vibekanban.md)** ⭐⭐⭐⭐⭐
   - Setting up VibeKanban for multi-agent execution
   - Creating tickets from plans
   - Running multiple agents in parallel
   - Exercise: Implement 3 features in parallel with merge conflict resolution
   - *Difficulty: Advanced*
   - *Time: ~60-90 minutes*

6. **[Advanced Planning with Speckit](6-advanced-planning-speckit.md)** ⭐⭐⭐⭐
   - Spec-Driven Development concepts
   - SpecKit workflow and commands
   - When to use SpecKit vs simple planning
   - Exercise: Add priority system to TODO app
   - *Difficulty: Advanced*
   - *Time: ~45-60 minutes*

7. **[QA and Pull Requests](7-qa-and-pull-requests.md)** ⭐⭐⭐
   - Automated PR creation with agents
   - AI-assisted code review techniques
   - Tools: Greptile and CodeRabbit
   - Exercise: Review PRs with AI assistance
   - *Difficulty: Intermediate*
   - *Time: ~30 minutes*

8. **[Language Server Protocol (LSP)](8-language-server-protocol.md)** ⭐⭐⭐
   - What LSP is and why it matters
   - How agents use LSP for semantic understanding
   - Setting up language servers
   - Exercise: Explore code with LSP-powered agents
   - *Difficulty: Intermediate*
   - *Time: ~30-45 minutes*

### Product / Design / Business

9. **[Transforming & Structuring Data](9-transforming-structuring-data.md)** ⭐⭐
   - Using AI to transform unstructured data
   - Converting qualitative feedback to structured formats
   - Exercise: Generate and structure user feedback
   - *Difficulty: Beginner*
   - *Time: ~30 minutes*

## Suggested Learning Paths

### For Engineers
1. Start with modules 1-4 (General)
2. Continue with modules 5-8 (Engineering Specific)
3. Optional: Module 9 (Data Transformation)

### For Product Managers / Designers
1. Start with modules 1-3 (General)
2. Focus on module 9 (Transforming & Structuring Data)
3. Optional: Module 4 (Safety and Guardrails)

### For Business / Non-Technical Roles
1. Start with module 1 (Getting Started)
2. Skim module 2 (Understanding AI Agents)
3. Focus on module 9 (Transforming & Structuring Data)

## Key Concepts Across Modules

**Planning**: A foundational concept reinforced throughout. Good planning saves time and tokens.

**Context Management**: Understanding how to manage your context window for optimal agent performance.

**Safety First**: Always consider guardrails when working with autonomous agents.

**One-Shot Execution**: The goal is to write clear instructions so agents can complete tasks in one attempt.

## The TODO App

All exercises build upon a simple TODO application. The baseline app includes:
- Add, complete, and delete todos
- Filter by all/active/completed
- Clean, simple UI

This baseline should NOT be modified as it serves as the foundation for training exercises.

## Getting Help

Each module includes:
- Clear learning objectives
- Step-by-step exercises
- Success criteria
- Alternative exercises for bonus learning

Work through exercises systematically and review Claude's approach before approving implementation. When unsure, ask Claude to explain its reasoning.

## Next Steps

Start with [Getting Started](1-getting-started.md) to set up your environment, then progress through the modules based on your role and learning goals.
