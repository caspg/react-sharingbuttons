import React from 'react'
import { render } from 'react-dom'

import {
  Email,
  Facebook,
  Google,
  Pinterest,
  Reddit,
  Tumblr,
  Twitter,
} from '../src'

const Buttons = () => {
  const url = 'google.com'
  const shareText = 'check this site yo!'
  const mediaSrc = 'http://placekitten.com/g/200/300'

  return (
    <div>
      <Email url={url} subject="nice subject" />
      <Facebook url={url} />
      <Google url={url} />
      <Pinterest url={url} shareText={shareText} mediaSrc={mediaSrc} />
      <Reddit />
      <Tumblr />
      <Twitter />
    </div>
  )
}

render(
  <Buttons />,
  document.getElementById('app'),
)
