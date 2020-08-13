import React, { Component } from 'react';

import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';

const TextMenu = styled.span`
  color: white;
`;

class Menu extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<TextMenu>MENU</TextMenu>}
        menuCloseButton={<TextMenu>X</TextMenu>}
        changeMenuOn='500px'
        largeMenuClassName='large-menu-classname'
        smallMenuClassName='small-menu-classname'
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      />
    );
  }
}

export default Menu;
