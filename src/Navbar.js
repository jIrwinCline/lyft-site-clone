import React, { Component } from 'react';
import css from './Navbar.css'

export default class Navbar extends Component {
    constructor(props){
      super(props)

    }

    render() {
      return (
        <div>
        <nav>
        <a href="#" className='logo'><i class="fab fa-lyft"></i></a>
        <div className='navlinks'>
        <a href="#">DRIVER</a>
        <a href="#">RIDER</a>
        <a href="#">LOG IN</a>
        </div>
        </nav>
        </div>
      )
    }
}
