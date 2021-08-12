/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import withCounter from './withCounter';

const HoverCounter = ({ count, onHandler }) => (
    <div>
        <br />
        <button type="button" onMouseOver={onHandler}>
            Hover {count} times
        </button>
    </div>
);
export default withCounter(HoverCounter);
