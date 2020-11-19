import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddMemberNav from './addmembernav'
import renderer from 'react-test-renderer';

describe('AddMemberNav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <AddMemberNav />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders the UI as expected', () => {
    const div = document.createElement('div')
    const tree = renderer
      .create(<BrowserRouter>
        <AddMemberNav />
      </BrowserRouter>,
      div)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

});