import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import TumblrIcon from '../icons/Tumblr'
import encodeURI from '../utils/encodeURI'

const Tumblr = (props) => {
  const text = props.text || 'Tumblr'
  const url = encodeURI(props.url)
  const title = encodeURI(props.title)
  const caption = encodeURI(props.caption)
  const content = encodeURI(props.content)
  const baseUrl = 'https://www.tumblr.com/widgets/share/tool?posttype=link'
  const fullUrl = `${baseUrl}&title=${title}&caption=${caption}&content=${content}&canonicalUrl=${url}&shareSource=tumblr_share_button`

  return (
    <SharingButton
      type="tumblr"
      onClick={props.onClick}
      icon={TumblrIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

Tumblr.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
}

export default Tumblr
