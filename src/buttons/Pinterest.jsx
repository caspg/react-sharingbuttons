import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import PinterestIcon from '../icons/Pinterest'

const Pinterest = (props) => {
  const text = props.text || 'Pinterest'
  const url = encodeURIComponent(props.url)
  const shareText = encodeURIComponent(props.shareText)
  const mediaSrc = encodeURIComponent(props.mediaSrc)
  const fullUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${mediaSrc}&description=${shareText}`

  return (
    <SharingButton
      icon={PinterestIcon}
      text={text}
      isStyled={props.isStyled}
      fullUrl={fullUrl}
      styles={{
        backgroundColor: '#bd081c',
        hoverBackgroundColor: '#8c0615',
      }}
    />
  )
}

Pinterest.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  shareText: PropTypes.string,
  mediaSrc: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Pinterest
