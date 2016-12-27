import React from 'react'
import style from './style'

export default function Oscillators() {
  return (
    <div className={style.container}>
      <div className={style.topBuffer} />
      <div className={style.wrapper} >
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
        <div className={style.knob}>
          Absolute positioned
        </div>

      </div>
    </div>
  )
}
