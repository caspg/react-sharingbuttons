import React from 'react'
import { render } from 'react-dom'

import Email from '../src/buttons/Email'
import Facebook from '../src/buttons/Facebook'
import Google from '../src/buttons/Google'
import Pinterest from '../src/buttons/Pinterest'
import Reddit from '../src/buttons/Reddit'
import Tumblr from '../src/buttons/Tumblr'
import Twitter from '../src/buttons/Twitter'

const Buttons = () =>
  <div>
    <Email />
    <Facebook />
    <Google />
    <Pinterest />
    <Reddit />
    <Tumblr />
    <Twitter />
  </div>

render(
  <Buttons />,
  document.getElementById('app'),
)
