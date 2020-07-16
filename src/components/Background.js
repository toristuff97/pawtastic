import React, { Component } from 'react'
import Form from './Form'
import Progress from './Progress'
import Nav from './Nav'


export default class Background extends Component {
    render() {
        return (
            <div className="bckgrd">
                <Progress />
                <Form />
            </div>
        )
    }
}
