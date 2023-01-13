import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 0, //przypisanie value inputa step 
        };
    }

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;
            if (action === 'add') {
                currentCounterValue += 1
            } else if (action === 'reInit') {
                currentCounterValue = prevProps.initValue;
            } else if (action === 'add-step') { // dodanie akcji
                currentCounterValue += this.state.stepValue;
            }
            else {
                currentCounterValue = 0;
            }
            return (
                {
                    counterValue: currentCounterValue

                }
            )

        });
    }
    // zmiana stanu stepu (value - z pola input)
    stepUpdate = (updatedValue) => {
       // console.log(updatedValue); wartośc value step
        this.setState({
            stepValue: parseInt(updatedValue),

        });

    };
    render() {

        return (
            <div className="counter">
                Counter:
                <Display
                    displayValue={this.state.counterValue} />
                <ButtonsPanel
                    buttonMethod={this.changeValue}
                    //stepValue={this.state.stepValue} - jeśli chcemy przekaząć jako propos wartosc stepu do ButtonePanel
                />
                <Step stepMethod={this.stepUpdate} />
            </div>
        )
    }

}

export default Counter;


