import React, { PropTypes } from 'react'
import SharingButton from '../components/SharingButton'
import TwitterIcon from '../icons/Twitter'
import encodeURI from '../utils/encodeURI'

const Twitter = (props) => {
  const text = props.text || 'Twitter'
  const url = encodeURI(props.url)
  const shareText = encodeURI(props.shareText)
  const fullUrl = `https://twitter.com/intent/tweet/?text=${shareText}&url=${url}`

  return (
    <SharingButton
      type="twitter"
      onClick={props.onClick}
      icon={TwitterIcon}
      text={text}
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
  onClick: PropTypes.func,
}

export default Twitter
