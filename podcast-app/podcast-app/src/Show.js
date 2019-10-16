import React, { Component } from "react";

class Show extends Component {
    constructor() {
        super()
    }

    render() {
        return (
        <div>
            <h1>{this.name}</h1>
            <audio controls><source src={this.url} type="audio/mp3"></source></audio>
            <p>
            {this.description}
            </p>
        </div>
        );
    };
}

export default Show;
