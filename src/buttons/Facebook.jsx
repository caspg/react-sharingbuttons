import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import FacebookIcon from '../icons/Facebook'

const Facebook = (props) => {
  const text = props.text || 'Facebook'

  return (
    <SharingButton
      icon={FacebookIcon}
      text={text}
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
}

export default Facebook
