import React, { PropTypes } from 'react'

const SharingButton = props => (
  <a
    className="resp-sharing-button__link"
    href="#x"
    target="_self"
  >
    <div>
      {props.icon()}
      <span>
        {props.text}
      </span>
    </div>
  </a>
)

SharingButton.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default SharingButton
