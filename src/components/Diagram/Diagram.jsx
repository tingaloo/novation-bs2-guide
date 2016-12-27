import React, { Component } from 'react'
import style from './style.css'
import RowOne from 'components/Diagram/RowOne/RowOne'
import RowTwo from 'components/Diagram/RowTwo/RowTwo'

export default class Diagram extends Component {
  render(){
    return (
      <div className={style.container}>
        <div className={style.topBuffer} />
        <RowOne />
        <RowTwo />
      </div>
    )
  }
}
