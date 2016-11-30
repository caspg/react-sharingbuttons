import React, { PropTypes } from 'react'
import getStyled from './utils/getStyled'

const SharingButton = (props) => {
  const styled = getStyled(props.isStyled)

  const Link = styled('a')`
    display: inline-block;
    text-decoration: none;
    color: #fff;
    margin: 0.5em;
    border-radius: 5px;
    transition: 25ms ease-out;
    padding: 0.5em 0.75em;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif
  `

  const Icon = styled(props.icon)`
    width: 1em;
    height: 1em;
  `

  const Text = styled('span')`
    color: green;
  `

  return (
    <Link
      className="resp-sharing-button__link"
      href="#x"
      target="_self"
    >
      <div>
        <Icon />
        <Text>
          {props.text}
        </Text>
      </div>
    </Link>
  )
}

SharingButton.defaultProps = {
  isStyled: true,
}

SharingButton.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isStyled: PropTypes.bool.isRequired,
}

export default SharingButton
