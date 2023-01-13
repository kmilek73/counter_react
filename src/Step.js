import React, { Component } from "react";
import './Step.css';

export default class Step extends Component {
    render() {
        return (
            <span className="step">ZWIĘKSZ O :
                <input  ref={(data) => { this._inputStep = data; }}
                    onChange={() => this.props.stepMethod(this._inputStep.value)}
                    min="1" type="number"
                    value={this.props.stepValue}
                />   
                      
           </span>


        );
    }


}