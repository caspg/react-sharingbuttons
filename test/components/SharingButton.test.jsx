import React from 'react'
import expect from 'expect'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

import SharingButton from '../../src/components/SharingButton'
import TwitterIcon from '../../src/icons/Twitter'

describe('SharingButton component', () => {
  const fullUrl = 'fullUrl'
  const onClick = () => {}
  const text = 'some text'

  const wrapper = shallow(
    <SharingButton
      type="twitter"
      onClick={onClick}
      icon={TwitterIcon}
      text={text}
      fullUrl={fullUrl}
    />,
  )

  it('render anchor tag wit correct props', () => {
    expect(wrapper.find('a').length).toBe(1)

    expect(wrapper.props().href).toBe(fullUrl)
    expect(
      wrapper.props().className,
    ).toBe('react-sharing-button__link react-sharing-button--twitter')
    expect(wrapper.props().target).toBe('_blank')
    expect(wrapper.props().rel).toBe('noopener noreferrer')
    expect(wrapper.props().onClick).toBe(onClick)
  })

  it('render svg icon with correct class name', () => {
    expect(
      wrapper.find('svg').props().className,
    ).toBe('react-sharing-button__icon')
  })

  it('render span element', () => {
    const spanElement = wrapper.find('span')

    expect(spanElement.props().className).toBe('react-sharing-button__text')
    expect(spanElement.text()).toBe(text)
  })
})
