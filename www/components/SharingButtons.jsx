import React from 'react'

import { config } from 'config'

import {
  Email,
  Facebook,
  Google,
  Pinterest,
  Reddit,
  Tumblr,
  Twitter,
  WhatsApp,
  Telegram,
} from '../../src'

export default () => {
  const url = config.siteUrl
  const shareText = 'Lightweight social sharing buttons for React. No tracking. Just fun.'
  const tumblr = {
    title: 'React Sharingbuttons',
    caption: 'Lightweight social sharing buttons for React. No tracking. Just fun.',
    content: url,
  }

  const buttonsWrapperStyles = {
    padding: 50,
    marginTop: 75,
    marginBottom: 100,
  }

  return (
    <div>
      <a href={config.repoUrl}>Code on GitHub</a>
      <br />
      <br />
      <p>Lightweight social sharing buttons for React. No tracking. Just fun. Heavily inspired by <a href="http://sharingbuttons.io">sharingbuttons.io</a></p>

      <div style={buttonsWrapperStyles}>
        <Email url={url} subject="nice subject" />
        <Facebook url={url} />
        <Google url={url} />
        <Pinterest url={url} shareText={shareText} mediaSrc={url} />
        <Reddit url={url} />

        <Tumblr
          url={url}
          title={tumblr.title}
          caption={tumblr.caption}
          content={tumblr.content}
        />

        <Twitter url={url} shareText={shareText} />

        <WhatsApp url={url} message={shareText} />
        <Telegram url={url} message={shareText} />
      </div>
    </div>
  )
}
