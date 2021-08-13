/* eslint-disable jsx-a11y/mouse-events-have-key-events */
export default function Click({ count, onHandler }) {
    return (
        <div>
            <br />
            <button type="button" onMouseOver={onHandler}>
                Hover {count} times
            </button>
        </div>
    );
}
