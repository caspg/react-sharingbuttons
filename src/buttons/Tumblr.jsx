import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import TumblrIcon from '../icons/Tumblr'

const Tumblr = (props) => {
  const text = props.text || 'Tumblr'

  return (
    <SharingButton
      icon={TumblrIcon}
      text={text}
      isStyled={props.isStyled}
      styles={{
        backgroundColor: '#35465C',
        hoverBackgroundColor: '#222d3c',
      }}
    />
  )
}

Tumblr.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Tumblr
