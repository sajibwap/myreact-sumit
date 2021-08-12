/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

class Hover extends React.Component {
    state = { count: 0 };

    render() {
        const { count } = this.state;
        const onHandler = () => {
            this.setState({ count: count + 1 });
        };

        return (
            <>
                <br />
                <button type="button" onMouseOver={onHandler}>
                    Hover {count} times
                </button>
            </>
        );
    }
}

export default Hover;
