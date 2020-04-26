import React, { Component } from 'react';

class Like extends Component {
  render() {
    let classes = this.props.liked ? 'fas fa-heart' : 'far fa-heart';
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: 'pointer' }}
        className={classes}
      ></i>
    );
  }
}

export default Like;
