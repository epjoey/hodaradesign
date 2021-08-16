import React from 'react';
import Link from './Link';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link href="/" className="logo"></Link>

        {
          this.props.path !== '/checkout/' && !!this.props.cartTotal && (
            <Link href='/checkout/'
              className="btn btn-lg btn-header-right"
            >Checkout</Link>
          )
        }
        { 
          this.props.path === '/checkout/' && (
            <Link href='/'
              className="btn btn-lg btn-header-right"
            >Keep shopping</Link>
          ) 
        }
      </div>
    );
  }
}

export default Header;