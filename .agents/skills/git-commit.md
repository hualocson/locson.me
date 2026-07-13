---
name: git-commit
description: Create atomic git commits using Conventional Commits. Analyze changes, stage related files, generate commit message, and commit.
allowed-tools: Bash
---

# Git Commit

Create **one atomic commit** that represents a single logical change.

## Workflow

1. Check repository state.

```bash
git status --short
git diff --staged
git diff
```

2. If nothing is staged, stage only files related to the same logical change.

```bash
git add <files>
```

Use `git add -p` when changes should be split.

3. Generate a Conventional Commit message.

Format:

```text
<type>(<scope>): <description>
```

Scope is optional.

### Types

- feat
- fix
- refactor
- perf
- docs
- test
- style
- build
- ci
- chore
- revert

Description rules:

- imperative mood
- lowercase
- under 72 characters
- describe _what_ changed

Examples:

```text
feat(auth): add refresh token support
fix(editor): prevent duplicate save
refactor(api): simplify request handler
docs: update installation guide
```

4. Commit.

```bash
git commit -m "<type>(<scope>): <description>"
```

## Rules

- One logical change per commit.
- Never commit secrets.
- Never use `--no-verify`.
- Never use force commands unless explicitly requested.
- If hooks fail, fix the issue and create a new commit.
- Do not modify git config.
