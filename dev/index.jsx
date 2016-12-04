import React from 'react'
import { render } from 'react-dom'

import '../src/main.css'

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
  const url = 'https://github.com/caspg'
  const shareText = 'check this site yo'
  const mediaSrc = 'http://placekitten.com/g/200/300'

  const tumblr = {
    title: 'some-title',
    caption: 'some-caption',
    content: 'some-content',
  }

  return (
    <div>
      <Email url={url} subject="nice subject" />
      <Facebook url={url} />
      <Google url={url} />
      <Pinterest url={url} shareText={shareText} mediaSrc={mediaSrc} />
      <Reddit url={url} />

      <Tumblr
        url={url}
        title={tumblr.title}
        caption={tumblr.caption}
        content={tumblr.content}
      />

      <Twitter url={url} shareText={shareText} />
    </div>
  )
}

render(
  <Buttons />,
  document.getElementById('app'),
)
