import React from 'react'
import PropTypes from 'prop-types'
import SharingButton from '../components/SharingButton'
import GoogleIcon from '../icons/Google'
import encodeURI from '../utils/encodeURI'

const Google = (props) => {
  const text = props.text || 'Google+'
  const url = encodeURI(props.url)
  const fullUrl = `https://plus.google.com/share?url=${url}`

  return (
    <SharingButton
      type="google"
      onClick={props.onClick}
      icon={GoogleIcon}
      text={text}
      fullUrl={fullUrl}
    />
  )
}

Google.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Google
