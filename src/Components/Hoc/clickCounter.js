import withCounter from './withCounter';

const ClickCounter = (props) => {
    const { count, onHandler } = props;
    return (
        <div>
            <br />
            <button type="button" onClick={onHandler}>
                Click {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);
