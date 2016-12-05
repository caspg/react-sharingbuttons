import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

const HelloWorld = props =>
  <div>Hello, {props.name}!</div> // eslint-disable-line react/prop-types

describe('HelloWorld', () => {
  it('tets', () => {
    const component = shallow(<HelloWorld name="World" />)
    expect(component.html()).toBe('<div>Hello, World!</div>')
  })
})
