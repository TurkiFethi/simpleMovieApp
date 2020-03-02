import React, { Component } from 'react'

export default class SearchMovie extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={(event)=>this.props.search(event.target.value)}/>
            </div>
        )
    }
}
