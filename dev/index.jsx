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
