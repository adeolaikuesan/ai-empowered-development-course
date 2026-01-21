# Module 9: Transforming & Structuring Data

## What You'll Learn
- Transform unstructured qualitative data into structured formats
- Use AI to categorize and analyze feedback
- Generate synthetic data for testing and analysis

---

## Why This Matters

AI agents excel at transforming unstructured data (interviews, feedback, reports) into structured formats that can be analyzed, filtered, and visualized. This is valuable for:

- **Product Managers** - Synthesizing user research
- **Designers** - Analyzing usability feedback
- **Business Analysts** - Structuring qualitative data

> [!TIP]
> AI can identify patterns and themes across large volumes of unstructured data that would take hours manually.

---

## Common Use Cases

| Scenario | Input | Output |
|----------|-------|--------|
| **User Research** | Interview transcripts | Categorized themes and insights |
| **Bug Triage** | Bug reports | Prioritized issues with severity |
| **Customer Feedback** | Support tickets | Sentiment analysis and categories |
| **Meeting Notes** | Raw notes | Action items and decisions |

---

## Key Takeaways

| Concept | Remember |
|---------|----------|
| **Transformation** | AI converts unstructured text into structured data |
| **Pattern Recognition** | Identifies themes and categories automatically |
| **Time Savings** | Hours of manual work done in minutes |
| **Quality** | Consistent categorization and analysis |

---

## Exercise: Transform Unstructured Feedback into CSV

| | |
|---|---|
| **Goal** | Generate qualitative feedback and convert it to structured data |
| **Concepts** | Data transformation, categorization, synthetic data generation |

### Steps

1. Ask Claude to generate 3 user interview transcripts about the TODO app (different use cases)

2. Ask Claude to generate 3 bug reports (varying severity)

3. Ask Claude to read all 6 documents and create a CSV file with these columns:
   - Source (Interview/Bug)
   - Category (Feature Request, Usability, Bug, etc.)
   - Priority (High/Medium/Low)
   - Summary (one sentence)
   - Theme (a tag like "Collaboration", "Mobile", etc.)

### Acceptance Criteria
- [ ] 3 user interview transcripts generated with realistic content
- [ ] 3 bug reports generated with varying severity
- [ ] CSV file created with all required columns
- [ ] All 6 items are categorized correctly
- [ ] Priorities are assigned appropriately
- [ ] Themes are identified and consistent

> [!NOTE]
> This exercise demonstrates how AI can help product, design, and business teams structure qualitative data for analysis.

---

← [Previous: Language Server Protocol](8-language-server-protocol.md) | [Back to Course Overview](README.md)
