import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { count: 0 };

        onHandler = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;

            return <OriginalComponent count={count} onHandler={this.onHandler} />;
        }
    }
    return NewComponent;
};

export default withCounter;
