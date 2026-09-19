# Initial Setup as Root

[Initial Server Setup with Ubuntu](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)

:::caution

Replace the IP address and `sammy` below with your own server and username.

:::

## Log in as `root`

```sh
ssh root@your-server-ip
```

## Create a new user

```sh
adduser sammy
```

## Grant sudo privileges

```sh
usermod -aG sudo sammy
```

## Set up the firewall

```sh
ufw app list
ufw allow OpenSSH
ufw enable
ufw status
```

## Test the new user account

Open a new terminal session and log in as the new user:

```sh
ssh sammy@your-server-ip
sudo su
exit
```
