import React, { Component } from 'react'

export class HornedBeasts extends Component {
    render() {
        return (
            <div>
                 <h2>{this.props.title}</h2>
                <img src={this.props.img}></img>
                <p>{this.props.disc}</p>
                
            </div>
        )
    }
}

export default HornedBeasts
