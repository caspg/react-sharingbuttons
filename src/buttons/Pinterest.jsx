import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import PinterestIcon from '../icons/Pinterest'

const Pinterest = (props) => {
  const text = props.text || 'Pinterest'

  return (
    <SharingButton
      icon={PinterestIcon}
      text={text}
      isStyled={props.isStyled}
      styles={{
        backgroundColor: '#bd081c',
        hoverBackgroundColor: '#8c0615',
      }}
    />
  )
}

Pinterest.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Pinterest
