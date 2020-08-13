import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import LinkedInIcon from '../icons/LinkedIn'
import encodeURI from '../utils/encodeURI'

const LinkedIn = (props) => {
  const text = props.text || 'LinkedIn'
  const url = encodeURI(props.url)
  const shareText = encodeURI(props.shareText)
  const fullUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + shareText + '&summary=' + shareText + '&source=' + url;

  return (
    <SharingButton
      type="linkedin"
      onClick={props.onClick}
      icon={LinkedInIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

LinkedIn.propTypes = {
  text: PropTypes.string,
  shareText: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default LinkedIn
