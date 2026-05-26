# SFTP Sync Extension for VS Code

[SFTP by Natizyskunk](https://github.com/Natizyskunk)

Configure the SFTP extension with a JSON file like this:

```json
{
  "name": "example.gr | FTP connection",
  "host": "example.gr",
  "protocol": "ftp",
  "port": 21,
  "username": "ftp-user",
  "password": "ftp-password",
  "remotePath": "/",
  "uploadOnSave": true,
  "secure": true,
  "useTempFile": false,
  "openSsh": false,
  "secureOptions": {
    "rejectUnauthorized": false
  }
}
```
