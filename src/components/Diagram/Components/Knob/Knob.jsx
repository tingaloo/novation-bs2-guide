import React, { Component } from 'react'
import style from './style'
import classNames from 'classnames/bind'

let cx = classNames.bind(style);

export default class Knob extends Component {
  render() {
    let className = cx({
      circle: true,
      knob: true,
    });
    return (
      <div>
        <div className={className} />
        <div className={style.tooltip} />
      </div>
    )
  }

}
