import React from 'react'
import style from './style'
import Master from 'components/Diagram/RowOne/Master/Master'
import Oscillators from 'components/Diagram/RowOne/Oscillators/Oscillators'
import Mixer from 'components/Diagram/RowOne/Mixer/Mixer'
import Filters from 'components/Diagram/RowOne/Filters/Filters'


export default function RowOne() {
  return (
    <div className={style.container}>
      <Master />
      <Oscillators />
      <Mixer />
      <Filters />
    </div>
  )
}
