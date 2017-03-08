/** @babel */
/** @jsx etch.dom */
/* eslint-disable react/no-unknown-property */

import etch from 'etch'
import EtchComponent from '../etch-component'

export default class AtomLogo extends EtchComponent {
  render () {
    return (
      <div className='about-logo-div'>
        <img src={this.imgPath()} className='about-logo'/>
        <span className='about-logo-text'>
          THERA
        </span>
      </div>
    )
  }

  imgPath () {
    return __dirname + '/../../resources/logo-clip.png'
  }
}
