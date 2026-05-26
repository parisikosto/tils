# Settings

My personal VS Code `settings.json` file:

```json title="settings.json"
{
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.startupEditor": "none",
  "workbench.iconTheme": "material-icon-theme",

  "security.workspace.trust.untrustedFiles": "open",

  "terminal.integrated.fontFamily": "MesloLGS NF",
  "terminal.integrated.fontSize": 14,

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.showToolbar": "always",

  "files.associations": {
    "*.svg": "html",
    "*.sh": "shellscript"
  },
  "[shellscript]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2
  },

  "svgPreview.autoOpen": true,

  "liveServer.settings.donotShowInfoMsg": true,

  "github.copilot.enable": {
    "*": false,
    "plaintext": false,
    "markdown": false,
    "scminput": false,
    "yaml": false
  },

  "git.openRepositoryInParentFolders": "never",

  "go.toolsManagement.autoUpdate": true,

  "todohighlight.isEnable": true,
  "todohighlight.isCaseSensitive": true,
  "todohighlight.keywords": [
    {
      "text": "TODO",
      "color": "red",
      "border": "1px solid red",
      "borderRadius": "2px",
      "backgroundColor": "rgba(0,0,0,.2)"
    },
    {
      "text": "WORKING",
      "color": "white",
      "border": "1px solid dodgerblue",
      "borderRadius": "2px",
      "backgroundColor": "rgba(0,0,0,.2)"
    },
    {
      "text": "DONE",
      "color": "white",
      "border": "2px solid green",
      "borderRadius": "2px",
      "backgroundColor": "rgba(0,0,0,.2)"
    },
    {
      "text": "DEBUG",
      "color": "#000000",
      "backgroundColor": "orange",
      "overviewRulerColor": "grey"
    },
    {
      "text": "NOTE",
      "color": "#ffffff",
      "backgroundColor": "purple",
      "overviewRulerColor": "grey"
    },
    {
      "text": "CLEAR",
      "color": "red",
      "backgroundColor": "white",
      "overviewRulerColor": "grey"
    },
    {
      "text": "REVIEW",
      "color": "black",
      "overviewRulerColor": "grey"
    },
    {
      "text": "Remove",
      "color": "white",
      "border": "1px solid red",
      "borderRadius": "2px",
      "backgroundColor": "rgba(0,0,0,.2)"
    }
  ]
}
```
