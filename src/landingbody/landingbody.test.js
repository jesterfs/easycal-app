import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LandingBody from './landingbody'
import renderer from 'react-test-renderer';

describe('LandingBody component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <LandingBody />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders the UI as expected', () => {
    const div = document.createElement('div')
    const tree = renderer
      .create(<BrowserRouter>
        <LandingBody />
      </BrowserRouter>,
      div)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

});