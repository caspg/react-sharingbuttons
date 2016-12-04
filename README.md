# react-sharingbuttons

Lightweight social sharing buttons for React. No tracking. Just fun. Heavily inspired by [sharingbuttons.io](http://sharingbuttons.io)

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
  const url = 'https://github.com/caspg/react-sharingbuttons'
  const shareText = 'Check this site!'

  return (
    <div>
      <Facebook url={url} />
      <Twitter url={url} shareText={shareText} />
    </div>
  )
}
```

[See the example](https://github.com/caspg/react-sharingbuttons/blob/master/www/components/SharingButtons.jsx#L15)

# Overriding styles

You can customize buttons further to meet your needs. For example, following html will be rendered for `Twitter` button:


```html
<a href="https://your.website" class="react-sharing-button__link react-sharing-button--twitter">
  <svg class="react-sharing-button__icon">...</svg>
  <span class="react-sharing-button__text">Share me</span>
</a>
```

### styled-components

Buttons by default are styled with [styled-components](https://github.com/styled-components/styled-components). If you don't want to use them, pass `BORING_SHARE_BUTTONS` as environment variable during the build process.

Example Webpack configuration:

```javascript
plugins: [
  new webpack.DefinePlugin({
    'process.env.BORING_SHARE_BUTTONS': JSON.stringify('true'),
  }),
],
```

# Available butons and its props

**common props:**

* `text` - text which is displayed inside button, default to button name.
* `onClick` - onClick event passed to `a` tag.

**button specific props:**


|               |                                                             |
|---------------|-------------------------------------------------------------|
| **Email**     | `text`, `url`, `subject`                                    |
| **Facebook**  | `text`, `url`                                               |
| **Google**    | `text`, `url`                                               |
| **Pinterest** | `text`, `url`, `shareText` (a pin description), `mediaSrc`  |
| **Reddit**    | `text`, `url`                                               |
| **Twitter**   | `text`, `url`, `shareText` (a tweet text),                  |
| **Tumblr**    | `text`, `url`, `title`, `caption`, `content`                |
