---
title: Diff
---

## Show differences between commits or working directory

**Options:**
- `--file <file>`: Show diff for specific file only
- `--block <block-hash>` or `-b <block-hash>`: Compare specific block only

### `notevc diff [commit1] [commit2] [options]`
```bash title="Examples"
notevc diff # Show uncommited changes (enhanced view)
notevc diff a1b2c3d4 # Compare working directory to commit
notevc diff a1b2c3d4 b5c6d7e8 # Compare two commits
notevc diff --file notes.md # Diff specific file
notevc diff a1b2c3d4 --file notes.md # Compare specific file to commit
notevc diff --block 1a2b3c --file notes.md # Compare specific block
notevc diff a1b2c3d4 --block 1a2b3c --file notes.md # Compare block to commit
```
