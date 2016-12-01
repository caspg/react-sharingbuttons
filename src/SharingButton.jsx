import React, { PropTypes } from 'react'
import getStyled from './utils/getStyled'

const SharingButton = (props) => {
  const styled = getStyled()

  const Link = styled('a')`
    display: inline-block;
    text-decoration: none;
    color: #fff;
    margin: 0.5em;
    border-radius: 5px;
    transition: 50ms ease-out;
    padding: 0.5em 0.75em;
    background-color: ${props.styles.backgroundColor};

    &:hover {
      background-color: ${props.styles.hoverBackgroundColor};
    }
  `

  const Icon = styled(props.icon)`
    fill: #fff;
    stroke-width: 0;
    width: 1.4em;
    height: 1.4em;
    vertical-align: bottom;
  `

  const Text = styled('span')`
    padding-left: 0.4em;
  `

  return (
    <Link
      className="resp-sharing-button__link"
      href={props.fullUrl}
      target="_blank"
    >
      <Icon />
      <Text>
        {props.text}
      </Text>
    </Link>
  )
}

SharingButton.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fullUrl: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    hoverBackgroundColor: PropTypes.string.isRequired,
  }),
}

export default SharingButton
