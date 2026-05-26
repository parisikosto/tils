# Add User Snippets

## Instructions

- In VS Code, go to **Settings** → **User Snippets**.
- Select **New Global Snippets File...**
- Add your snippets in a JSON file:

## Snippet Examples

```json title="snippets.json"
{
  "reactComponent": {
    "prefix": "rc",
    "body": [
      "export const ${1:${TM_FILENAME_BASE}} = (): JSX.Element => {",
      "\treturn <div>${1:${TM_FILENAME_BASE}}</div>;",
      "}",
      ""
    ],
    "description": "React component"
  },
  "reactBarelIndex": {
    "prefix": "re",
    "body": ["export * from '$0';"],
    "description": "React index barel export file"
  },
  "reactStyledComponentSetup": {
    "prefix": "rss",
    "body": [
      "import styled from 'styled-components';",
      "",
      "export const $1Wrapper = styled.$2`",
      "\t$0",
      "`;",
      ""
    ],
    "description": "React styled component with import"
  },
  "reactStyledComponent": {
    "prefix": "rs",
    "body": ["export const $1 = styled.$2`", "\t$0", "`;"],
    "description": "React styled component"
  }
}
```

Another example:

```json title="example.snippets.json"
{
  "Print to console": {
    "prefix": "cl",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["console.log($1)"],
    "description": "console.log"
  },
  "reactComponent": {
    "prefix": "rfc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    "description": "React component"
  },
  "reactStyledComponent": {
    "prefix": "rsc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "import styled from 'styled-components'",
      "",
      "const Styled${TM_FILENAME_BASE} = styled.$0``",
      "",
      "function ${TM_FILENAME_BASE}() {",
      "\treturn (",
      "\t\t<Styled${TM_FILENAME_BASE}>",
      "\t\t\t${TM_FILENAME_BASE}",
      "\t\t</Styled${TM_FILENAME_BASE}>",
      "\t)",
      "}",
      "",
      "export default ${TM_FILENAME_BASE}",
      ""
    ],
    "description": "React styled component"
  },
  "importCSSModule": {
    "prefix": "csm",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
    "description": "Import CSS Module as `styles`"
  }
}
```
