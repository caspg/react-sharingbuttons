import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import EmailIcon from '../icons/Email'
import encodeURI from '../utils/encodeURI'

const Email = (props) => {
  const text = props.text || 'Email'
  const url = encodeURI(props.url)
  const subject = encodeURI(props.subject)
  const fullUrl = `mailto:?subject=${subject}&body=${url}`

  return (
    <SharingButton
      icon={EmailIcon}
      text={text}
      isStyled={props.isStyled}
      fullUrl={fullUrl}
      styles={{
        backgroundColor: '#777',
        hoverBackgroundColor: '#5e5e5e',
      }}
    />
  )
}

Email.propTypes = {
  isStyled: PropTypes.bool,
  text: PropTypes.string,
  url: PropTypes.string,
  subject: PropTypes.string,
}

export default Email
