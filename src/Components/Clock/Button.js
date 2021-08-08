/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: nextChange } = nextProps;
        if (currentChange === nextChange) {
            return false;
        }
        return true;
    }

    render() {
        console.log('Button rendered');
        const { change, locale, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'en-US' ? 'Change to US' : 'Chagne to BD'}
                </button>
                {show && <p>this is a clock</p>}
            </>
        );
    }
}
export default Button;
