# Backup MongoDB to Google Drive

[Backup MongoDB to Google Drive with bash](https://snapshooter.com/learn/backup-mongodb-to-google-drive-bash)

Useful for scripting a manual/cron backup of a MongoDB database straight
to Google Drive, without a paid backup service.

## Prerequisites

- `mongodump` (MongoDB database tools)
- `tar`
- [`gdrive`](https://github.com/prasmussen/gdrive) CLI, authenticated with your Google account

```sh
apt-get install musl gnupg2 wget -y

wget https://github.com/prasmussen/gdrive/releases/download/2.1.1/gdrive_2.1.1_linux_amd64.tar.gz
tar -xvzf gdrive_2.1.1_linux_amd64.tar.gz
sudo install gdrive /usr/bin/gdrive

gdrive about
```

## Dump the database

```sh
mongodump --host <hostname> --port <port> --db <database_name> --out <output_directory>
```

Example:

```sh
mongodump --host localhost --port 27017 --db admin --authenticationDatabase admin --username admin --password password --out backup
```

## Compress and upload

```sh
tar -cvzf backup.tar.gz backup
gdrive upload backup.tar.gz
gdrive list
```
