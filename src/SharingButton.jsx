import React, { PropTypes } from 'react'

const SharingButton = (props) => {
  let styled
  if (props.styled) {
    styled = require('styled-components').default // eslint-disable-line global-require
  } else {
    styled = {
      span: () => p => <span>{p.children}</span>,
    }
  }

  const Text = styled.span`
    color: red;
  `

  return (
    <a
      className="resp-sharing-button__link"
      href="#x"
      target="_self"
    >
      <div>
        {props.icon()}
        <Text>
          {props.text}
        </Text>
      </div>
    </a>
  )
}

SharingButton.defaultProps = {
  styled: true,
}

SharingButton.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  styled: PropTypes.bool.isRequired,
}

export default SharingButton
