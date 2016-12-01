import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import GoogleIcon from '../icons/Google'
import encodeURI from '../utils/encodeURI'

const Google = (props) => {
  const text = props.text || 'Google+'
  const url = encodeURI(props.url)
  const fullUrl = `https://plus.google.com/share?url=${url}`

  return (
    <SharingButton
      icon={GoogleIcon}
      text={text}
      isStyled={props.isStyled}
      fullUrl={fullUrl}
      styles={{
        backgroundColor: '#dd4b39',
        hoverBackgroundColor: '#c23321',
      }}
    />
  )
}

Google.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
  url: PropTypes.string,
}

export default Google
