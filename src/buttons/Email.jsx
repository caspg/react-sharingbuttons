import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import EmailIcon from '../icons/Email'

const Email = (props) => {
  const text = props.text || 'Email'

  return (
    <SharingButton
      icon={EmailIcon}
      text={text}
      isStyled={props.isStyled}
      styles={{
        backgroundColor: '#777',
        hoverBackgroundColor: '#5e5e5e',
      }}
    />
  )
}

Email.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Email
