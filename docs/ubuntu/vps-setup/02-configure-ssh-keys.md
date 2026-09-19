# Configure SSH Keys

[How to Set Up SSH Keys on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-22-04)

## Access the VPS from your machine

Generate a new SSH key on your computer:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_rsa_myserver
```

Start the ssh-agent and copy the key to the server:

```sh
eval "$(ssh-agent -s)"
ssh-copy-id -i ~/.ssh/id_rsa_myserver sammy@your-server-ip
```

Test access with the new key:

```sh
ssh -i ~/.ssh/id_rsa_myserver sammy@your-server-ip
```

## Access GitHub from the VPS

Generate a new SSH key on the server:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github
```

Create an SSH config file:

```sh
echo "
# GitHub.com
Host github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519_github
" > ~/.ssh/config
```

Print the public key and add it to GitHub under **Settings → SSH and GPG keys**:

```sh
cat ~/.ssh/id_ed25519_github.pub
```

Test the connection:

```sh
ssh -T git@github.com
```
