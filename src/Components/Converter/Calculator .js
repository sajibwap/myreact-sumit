import React from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component {
    state = { temperature: '' };

    onTemperatueChange = (e) => {
        this.setState({
            temperature: e.target.value,
        });
    };

    render() {
        const { temperature } = this.state;
        return (
            <>
                <fieldset>
                    <legend>Enter temperature in Celsius:</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatueChange} />
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}
export default Calculator;
