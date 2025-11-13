---
title: Show
---

## Show detailed information about a specific commit, including block/file contents

**Options:**
- `--file <file>`: Show changes only for specific file
- `--block <block-hash>` or `-b <block-hash>`: Show specific block content
- `--content` or `-c`: Show full file content at commit

### `notevc show <commit-hash> [options]`
```bash title="Examples"
notevc show a1b2c3d4 # Show commit details
notevc show a1b2c3d4 --file notes.md # Show changes to specific file
notevc show a1b2c3d4 --file notes.md --content # Show full file content
notevc show a1b2c3d4 --file notes.md --block 1a2b3c # Show specific block
```
