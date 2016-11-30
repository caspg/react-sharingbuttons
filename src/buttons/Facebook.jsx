import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import FacebookIcon from '../icons/Facebook'

const Facebook = (props) => {
  const text = props.text || 'Facebook'

  return (
    <SharingButton
      icon={FacebookIcon}
      text={text}
      isStyled={props.isStyled}
      styles={{
        backgroundColor: '#3b5998',
        hoverBackgroundColor: '#2d4373',
      }}
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Facebook
