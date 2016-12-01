import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import TwitterIcon from '../icons/Twitter'
import encodeURI from '../utils/encodeURI'

const Twitter = (props) => {
  const text = props.text || 'Twitter'
  const url = encodeURI(props.url)
  const shareText = encodeURI(props.shareText)
  const fullUrl = `https://twitter.com/intent/tweet/?text=${shareText}&url=${url}`

  return (
    <SharingButton
      icon={TwitterIcon}
      text={text}
      isStyled={props.isStyled}
      fullUrl={fullUrl}
      styles={{
        backgroundColor: '#55acee',
        hoverBackgroundColor: '#2795e9',
      }}
    />
  )
}

Twitter.propTypes = {
  text: PropTypes.string,
  shareText: PropTypes.string,
  url: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Twitter
