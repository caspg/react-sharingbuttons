import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import PinterestIcon from '../icons/Pinterest'
import encodeURI from '../utils/encodeURI'

const Pinterest = (props) => {
  const text = props.text || 'Pinterest'
  const url = encodeURI(props.url)
  const shareText = encodeURI(props.shareText)
  const mediaSrc = encodeURI(props.mediaSrc)
  const fullUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${mediaSrc}&description=${shareText}`

  return (
    <SharingButton
      type="pinterest"
      onClick={props.onClick}
      icon={PinterestIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

Pinterest.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  shareText: PropTypes.string,
  mediaSrc: PropTypes.string,
  onClick: PropTypes.func,
}

export default Pinterest
