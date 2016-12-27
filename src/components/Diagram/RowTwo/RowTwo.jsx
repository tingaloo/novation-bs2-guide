import React from 'react'
import style from './style'
import Arpeggiator from 'components/Diagram/RowTwo/Arpeggiator/Arpeggiator'
import Porta from 'components/Diagram/RowTwo/Porta/Porta'
import LFOs from 'components/Diagram/RowTwo/LFOs/LFOs'
import Envelopes from 'components/Diagram/RowTwo/Envelopes/Envelopes'
import Effects from 'components/Diagram/RowTwo/Effects/Effects'


export default function RowTwo() {
  return (
    <div className={style.container}>
      <Arpeggiator />
      <Porta />
      <LFOs />
      <Envelopes />
      <Effects />
    </div>
  )
}
