import React from 'react'
import '../assets/sponsors.css'
import * as effect from 'react-reveal'
import { ImAppleinc, ImFlattr, ImLastfm, ImPower, ImSvg } from 'react-icons/im'

export default function Sponsors() {
  return (
    <div className="sponsor" id="sponsors">
      <h2>Sponsors and Top Employers</h2>
      <div className="logos">
        <effect.Fade left>
          <ImPower />
        </effect.Fade>
        <effect.Fade bottom>
          <ImFlattr />
        </effect.Fade>
        <effect.Bounce>
          <ImAppleinc />
        </effect.Bounce>
        <effect.Fade right>
          <ImLastfm />
        </effect.Fade>
        <effect.Fade top>
          <ImSvg />
        </effect.Fade>
      </div>
    </div>
  )
}
