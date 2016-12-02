# Instalation

```bash
  yarn add react-sharingbuttons
```

or alternatively:

```bash
npm install --save react-sharingbuttons
```

# Usage

```javascript
import { Facebook, Twitter } from 'react-sharingbuttons'
```

**NOTE**
If you care about your bundle size, you can import each button separately.

```javascript
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
```


```javascript
const sharingButtons = () => {
  const url = 'https://github.com/caspg'
  const shareText = 'Check this site!'

  return (
    <div>
      <Facebook url={url} />
      <Twitter url={url} shareText={shareText} />
    </div>
  )
}
```

[See the example](https://github.com/caspg)

# Overriding styles

Buttons by default are styled with [styled-components](https://github.com/styled-components/styled-components), but you can customize buttons further to meet your needs. For example, following html will be rendered for `Twitter` button:


```html
<a href="https://your.website" class="react-sharing-button__link react-sharing-button__twitter">
  <svg class="react-sharing-button__icon">...</svg>
  <span class="react-sharing-button__text">Share me</span>
</a>
```

# Available butons and its props
`text` props is a text which displayed inside button, default to button name.

| name          | props                                                       |
|---------------|-------------------------------------------------------------|
| **Email**     | `text`, `url`, `subject`                                    |
| **Facebook**  | `text`, `url`                                               |
| **Google**    | `text`, `url`                                               |
| **Pinterest** | `text`, `url`, `shareText` (a pin description), `mediaSrc`  |
| **Reddit**    | `text`, `url`                                               |
| **Twitter**   | `text`, `url`, `shareText` (a tweet text),                  |
| **Tumblr**    | `text`, `url`, `title`, `caption`, `content`                |
