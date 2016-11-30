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
    transition: 50ms ease-out;
    padding: 0.5em 0.75em;
    background-color: #3b5998;

    &:hover {
      background-color: #2d4373;
    }

    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  `

  const Icon = styled(props.icon)`
    width: 1em;
    height: 1em;
    fill: #fff;
    stroke-width: 0;
    vertical-align: top;
  `

  const Text = styled('span')`
    padding-left: 0.4em;
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
