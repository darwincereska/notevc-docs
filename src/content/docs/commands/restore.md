---
title: Restore
---

## Restore files or blocks from a specific commit

**Options:**
- `--block <block-hash>` or `-b <block-hash>`: Restore specific block only

### `notevc restore <commit-hash> [file] [options]`
```bash title="Examples"
notevc restore a1b2c3d4 # Restore entire repository
notevc restore a1b2c3d4 notes.md # Restore specific file
notevc restore a1b2c3d4 notes.md --block 1a2b3c # Restore specific block
```
