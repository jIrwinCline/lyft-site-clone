import React, { Component } from 'react';
import './Apply.css'

export default class Apply extends Component {
    constructor(props){
      super(props)

    }

    render() {
      return (
        <div className="flex-container-apply">
        <div className='applylinks' style={{flexGrow: 1}}>
          <button className="btn btn-primary">Apply to Drive</button>
        </div>
        <div className='applylinks' style={{flexGrow: 1}}>
          <a href="#">Why Lyft: Drivers</a>
        </div>
        <div className='applylinks' style={{flexGrow: 1}}>
          <a href="#">Why Lyft: Cities</a>
        </div>
        </div>
      )
    }
}
