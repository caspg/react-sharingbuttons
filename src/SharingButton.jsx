import React, { PropTypes } from 'react'

const SharingButton = props => (
  <a
    className="resp-sharing-button__link"
    href="#x"
    target="_self"
  >
    <div>
      {props.children}
      {props.text}
    </div>
  </a>
)

SharingButton.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
}

export default SharingButton
