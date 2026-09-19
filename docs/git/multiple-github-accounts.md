# Multiple SSH Keys for Different GitHub Accounts

[Multiple SSH keys for different GitHub accounts](https://gist.github.com/jexchan/2351996)

Useful when you need Git/SSH access to two GitHub accounts (e.g. a
personal one and an old/other one) from the same machine.

## Generate a key per account

```sh
ssh-keygen -t rsa -C "your_email@example.com"
```

Save each one under a distinct filename, e.g. `~/.ssh/id_rsa_personal`
and `~/.ssh/id_rsa_work`, then add them to the agent:

```sh
ssh-add ~/.ssh/id_rsa_personal
ssh-add ~/.ssh/id_rsa_work

# Verify they're loaded
ssh-add -l
```

## Configure `~/.ssh/config`

```title="~/.ssh/config"
# Personal account
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_personal

# Work account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_work
```

## Clone using the custom host alias

```sh
git clone git@github.com-personal:owner/repo.git
git clone git@github.com-work:owner/repo.git
```

For a repo cloned this way, set the matching local Git identity:

```sh
git config user.name "your-name"
git config user.email "your-email@example.com"
```
