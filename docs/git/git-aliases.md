# Git Aliases

## Git aliases in the `.gitconfig` file

```.gitconfig title=".gitconfig"
[alias]
	ball = branch -a
	camend = commit --amend --no-edit
	co = checkout
	hist = log --all --graph --decorate --oneline
	pf = !git pull && git fetch -p
	rc = !git reset --hard && git clean -df
	st = status
```

## Create a `.gitconfig` file with a single command

```sh
echo '
[user]
	name = Your Name
	email = your_email@example.com
[alias]
	ball = branch -a
	camend = commit --amend --no-edit
	co = checkout
	hist = log --all --graph --decorate --oneline
	pf = !git pull && git fetch -p
	rc = !git reset --hard && git clean -df
	st = status
' > ~/.gitconfig
```
