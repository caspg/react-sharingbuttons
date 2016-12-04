import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import RedditIcon from '../icons/Reddit'
import encodeURI from '../utils/encodeURI'

const Reddit = (props) => {
  const text = props.text || 'Reddit'
  const url = encodeURI(props.url)
  const fullUrl = `https://reddit.com/submit/?url=${url}`

  return (
    <SharingButton
      type="reddit"
      onClick={props.onClick}
      icon={RedditIcon}
      text={text}
      fullUrl={fullUrl}
      styles={{
        backgroundColor: '#5f99cf',
        hoverBackgroundColor: '#3a80c1',
      }}
    />
  )
}

Reddit.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Reddit
