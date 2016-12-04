import { createElement } from 'react'

export default () => {
  if (process.env.BORING_SHARE_BUTTONS !== 'true') {
    return require('styled-components').default // eslint-disable-line global-require
  }

  return tagName =>
    () =>
      props =>
        createElement(tagName, props, props.children)
}
