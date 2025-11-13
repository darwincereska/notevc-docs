---
title: Log
---

## Show commit history with details

**Options:**
- `--max-count <n>` or `-n <n>`: Limit the number of commits shown
- `--since <time>`: Show commits since specified time (e.g., "1h", "2d", "1w")
- `--oneline`: Show compact one-line format
- `--file` or `-f [file]`: Show specific file and block details for each commit

### `notevc log [options]`
```bash title="Examples"
notevc log # Show all commits
notevc log --max-count 5 # Shows last 5 commits
notevc log --since 1d # Show commits from last day
notevc log --oneline # Compact format
notevc log --file # Show with file details
notevc log --file notes.md # Show commits affecting specific file
notevc log --file --oneline # Compact format with file info
```
