import React, { PropTypes } from 'react'
import SharingButton from '../SharingButton'
import RedditIcon from '../icons/Reddit'

const Reddit = (props) => {
  const text = props.text || 'Reddit'

  return (
    <SharingButton
      icon={RedditIcon}
      text={text}
      isStyled={props.isStyled}
      styles={{
        backgroundColor: '#5f99cf',
        hoverBackgroundColor: '#3a80c1',
      }}
    />
  )
}

Reddit.propTypes = {
  text: PropTypes.string,
  isStyled: PropTypes.bool,
}

export default Reddit
