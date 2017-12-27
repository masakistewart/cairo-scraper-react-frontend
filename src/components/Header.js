import React from 'react';
import AppBar from 'material-ui/AppBar';
import '../css/App.css'


const Header = () => (
  <AppBar
    title="Cairo's Scraper"
    iconClassNameLeft="hide-me"
    titleStyle={{
        textAlign: 'center',
        color: '#e65212'
    }}

    style={{
        background: 'white',
        marginBottom: '1em',
        width: '100%'
    }}
  />
);

export default Header;