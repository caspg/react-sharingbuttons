import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import WhatsAppIcon from '../icons/WhatsApp'
import encodeURI from '../utils/encodeURI'

const WhatsApp = (props) => {
  const text = props.text || 'WhatsApp'
  const url = encodeURI(props.url)
  const message = encodeURI(props.message)
  const fullUrl = 'whatsapp://send?text=' + message + '%20' + url;

  return (
    <SharingButton
      type="whatsapp"
      onClick={props.onClick}
      icon={WhatsAppIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

WhatsApp.propTypes = {
  text: PropTypes.string,
  message: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default WhatsApp
