# Repository Migration

## Instructions

1. In your local repository, check out a branch other than `main`.
2. Delete your local `main` branch:

```sh
git branch -D main
```

3. Add the new remote:

- Rename the `origin` remote to `old-origin`:

```sh
git remote rename origin old-origin
```

- Add the new remote:

```sh
git remote add origin https://github.com/parisikosto/tils.git
```

## Open PRs

If you no longer have your open PR branches locally (unlikely), you can still fetch them from the old origin with this command:

```sh
git fetch old-origin <BRANCH_NAME>:<BRANCH_NAME>
```

To open new PRs, push the branch as usual:

```sh
git push origin <BRANCH_NAME>
```
