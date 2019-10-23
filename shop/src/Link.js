import React from 'react';

const BASE = '/shop/';
const href = function(to) {
  return BASE + to;
};

class Link extends React.Component {
  static goTo(to) {
    history.pushState({ to: to }, '', href(to));
  }
  static current() {
    return location.pathname.split(BASE)[1];
  }

  isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  handleClick(event) {
    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !this.isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();

      const to = this.props.to;
      if (this.props.replace) {
        history.replaceState({ to: to }, '', href(to));
      } else {
        history.pushState({ to: to }, '', href(to));
      }

    }  
  }

  render() {
    const { to, innerRef, className } = this.props; // eslint-disable-line no-unused-vars
    return (
      <a onClick={e => this.handleClick(e)} href={href(to)} ref={innerRef} className={className}>{this.props.children}</a>
    );
  }  
}

export default Link;