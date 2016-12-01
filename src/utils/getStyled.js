import { createElement } from 'react'

export default () => {
  const isUnstyled = process.env.BORING_SHARE_BUTTONS === 'true'

  if (isUnstyled) {
    return tagName =>
      () =>
        props =>
          createElement(tagName, props, props.children)
  }

  return require('styled-components').default // eslint-disable-line global-require
}
