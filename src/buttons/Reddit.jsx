import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
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
    />
  )
}

Reddit.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Reddit
