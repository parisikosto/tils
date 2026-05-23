# Sidebar Icons

## Add an icon next to each sidebar menu item with CSS

> Here is one way to add an icon next to each sidebar menu item in three steps:

1. Add the PNG or SVG icons you want to use to the `static/img` directory.
2. Add the following CSS to use the icons (replace the background URL with your own):

```css title="src/css/custom.css"
.icon > div::before {
  content: '';
  display: inline-block;
  margin: auto -8px auto 8px;
  width: 20px;
  height: 20px;
}

.docusaurus-icon > div::before {
  background: url('/static/img/tech-icons/docusaurus.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
```

3. Add the classes `icon docusaurus-icon` to the `_category_.json` file:

```json title="_category_.json"
{
  "label": "Docusaurus",
  "className": "icon docusaurus-icon",
  "link": {
    "type": "generated-index",
    "description": "Docusaurus is a static-site generator..."
  }
}
```
