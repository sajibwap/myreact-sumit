import React from 'react';

class Click extends React.Component {
    state = { count: 0 };

    render() {
        const { count } = this.state;
        const onHandler = () => {
            this.setState({ count: count + 1 });
        };

        return (
            <>
                <br />
                <button type="button" onClick={onHandler}>
                    Click {count} times
                </button>
            </>
        );
    }
}

export default Click;
