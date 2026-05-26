# Useful Commands

## Find User Account Info

[12 Ways to Find User Account Info and Login Details in Linux](https://www.tecmint.com/check-user-in-linux/)

:::caution

Replace `parisikosto` with your own username.

:::

### List all groups a user belongs to

This command displays both the primary and supplementary groups for a specific user:

```sh
groups parisikosto
```

### Currently Logged-in Users

The `users` command lists users currently logged into the system:

```sh
users
```

### List user accounts

Shows user accounts and related account details:

```sh
less /etc/passwd
```

## Password Management

[How do I change a user password in Ubuntu Linux?](https://www.cyberciti.biz/faq/change-a-user-password-in-ubuntu-linux-using-passwd/)

### Change a user's password on Ubuntu

To change a user's password (e.g., `parisikosto`), run:

```sh
sudo passwd parisikosto
```

To change the `root` user password, run:

```sh
sudo passwd root
```

To change your own password, run:

```sh
passwd
```
