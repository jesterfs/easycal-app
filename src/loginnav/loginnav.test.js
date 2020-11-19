import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginNav from './loginnav'
import renderer from 'react-test-renderer';

describe('LoginNav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <LoginNav />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders the UI as expected', () => {
    const div = document.createElement('div')
    const tree = renderer
      .create(<BrowserRouter>
        <LoginNav />
      </BrowserRouter>,
      div)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

});