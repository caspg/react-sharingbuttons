import React, { PropTypes } from 'react'

const SharingButton = props => (
  <a
    className={`react-sharing-button__link react-sharing-button--${props.type}`}
    href={props.fullUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={props.onClick}
  >
    {props.icon({ className: 'react-sharing-button__icon' })}
    <span className="react-sharing-button__text">
      {props.text}
    </span>
  </a>
)

SharingButton.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fullUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default SharingButton
