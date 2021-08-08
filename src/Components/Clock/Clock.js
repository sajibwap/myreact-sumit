/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    state = {
        date: new Date(),
        locale: 'en-US',
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({ locale });
    };

    tick = () => {
        this.setState({ date: new Date() });
    };

    render() {
        console.log('Clock rendered');
        const { enable } = this.props;
        const { date, locale } = this.state;

        return (
            <>
                {enable && (
                    <div>
                        <div className="container">
                            <h1>Locale Time - {date.toLocaleTimeString(locale)}</h1>
                            {locale === 'en-US' && (
                                <Button change={this.handleClick} locale="bn-BD" show />
                            )}
                            {locale === 'bn-BD' && (
                                <Button change={this.handleClick} locale="en-US" show />
                            )}
                        </div>
                        <Button change={this.handleClick} locale="bn-BD" />
                        <Button change={this.handleClick} locale="en-US" />
                    </div>
                )}
            </>
        );
    }
}
export default App;
