import React, { PropTypes } from 'react'
import SharingButton from '../components/SharingButton'
import EmailIcon from '../icons/Email'
import encodeURI from '../utils/encodeURI'

const Email = (props) => {
  const text = props.text || 'Email'
  const url = encodeURI(props.url)
  const subject = encodeURI(props.subject)
  const fullUrl = `mailto:?subject=${subject}&body=${url}`

  return (
    <SharingButton
      type="email"
      onClick={props.onClick}
      icon={EmailIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

Email.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  subject: PropTypes.string,
  onClick: PropTypes.func,
}

export default Email
