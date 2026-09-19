# System Settings

## Other setup instructions

- [How To Install Git on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-22-04)
- [How To Install and Use Docker on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)

## Timezone

Check the current date, time, and timezone:

```sh
date
```

Set a different timezone:

```sh
timedatectl set-timezone [region/city]
```

Example:

```sh
timedatectl set-timezone Europe/Athens
```

Available timezones are listed under `/usr/share/zoneinfo/`.
