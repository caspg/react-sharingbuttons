import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import FacebookIcon from '../icons/Facebook'
import encodeURI from '../utils/encodeURI'

const Facebook = (props) => {
  const text = props.text || 'Facebook'
  const url = encodeURI(props.url)
  const fullUrl = `https://facebook.com/sharer/sharer.php?u=${url}`

  return (
    <SharingButton
      icon={FacebookIcon}
      text={text}
      fullUrl={fullUrl}
      styles={{
        backgroundColor: '#3b5998',
        hoverBackgroundColor: '#2d4373',
      }}
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}

export default Facebook
