import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import TelegramIcon from '../icons/Telegram'
import encodeURI from '../utils/encodeURI'

const Telegram = (props) => {
  const text = props.text || 'Telegram'
  const url = encodeURI(props.url)
  const message = encodeURI(props.message)
  const fullUrl = 'https://telegram.me/share/url?text=' + message + '&url=' + url;

  return (
    <SharingButton
      type="telegram"
      onClick={props.onClick}
      icon={TelegramIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

Telegram.propTypes = {
  text: PropTypes.string,
  message: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Telegram
