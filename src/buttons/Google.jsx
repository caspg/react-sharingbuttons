import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import GoogleIcon from '../icons/Google'

const Google = (props) => {
  const text = props.text || 'Google+'

  return (
    <SharingButton
      icon={GoogleIcon}
      text={text}
      isStyled={props.isStyled}
      styles={{
        backgroundColor: '#dd4b39',
        hoverBackgroundColor: '#c23321',
      }}
    />
  )
}

Google.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Google
