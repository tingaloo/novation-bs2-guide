import React from 'react'
import style from './style'
import Knob from 'components/Diagram/Components/Knob/Knob'

export default function Oscillators() {
  return (
    <div className={style.container}>
      <div className={style.topBuffer} />
      <div className={style.wrapper} >
        <Knob />
        <div className={style.knob}>
          Absolute positioned
        </div>
        <div className={style.knob}>
          Absolute positioned
        </div>
        <div className={style.knob}>
          Absolute positioned
        </div>
        <div className={style.knob}>
          Absolute positioned
        </div>

      </div>
    </div>
  )
}
