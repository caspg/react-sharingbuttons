import { createElement } from 'react'

export default (isStyled) => {
  if (isStyled) {
    return require('styled-components').default // eslint-disable-line global-require
  }

  return tagName =>
    () =>
      props =>
        createElement(tagName, props, props.children)
}
