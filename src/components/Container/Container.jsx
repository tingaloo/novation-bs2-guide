import React, { Component } from 'react'
import Bs2 from 'assets/images/bs2.jpg'
import Diagram from 'components/Diagram/Diagram';
import style from './style.css'

export default class Bs2Diagram extends Component {
  render() {
    return (
      <div>
      <Diagram />
      <div className={style.diagram} />
      </div>
    )
  }
}
