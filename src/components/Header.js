import React from 'react';
import Link from './Link';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link href="/" className="logo"></Link>
      </div>
    );
  }
}

export default Header;