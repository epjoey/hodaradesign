import React from 'react';


class Link extends React.Component {
  static goTo(path) {
    history.pushState({ path: path }, '', path);
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

      const href = this.props.href;
      if (this.props.replace) {
        history.replaceState({ path: href }, '', href);
      } else {
        history.pushState({ path: href }, '', href);
      }

    }  
  }

  render() {
    let { href, innerRef, className } = this.props; // eslint-disable-line no-unused-vars
    return (
      <a onClick={e => this.handleClick(e)} href={href} ref={innerRef} className={className}>{this.props.children}</a>
    );
  }  
}

export default Link;