import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import FacebookIcon from '../icons/Facebook'
import encodeURI from '../utils/encodeURI'

const Facebook = (props) => {
  const text = props.text || 'Facebook'
  const url = encodeURI(props.url)
  const fullUrl = `https://facebook.com/sharer/sharer.php?u=${url}`

  return (
    <SharingButton
      type="facebook"
      onClick={props.onClick}
      icon={FacebookIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Facebook
