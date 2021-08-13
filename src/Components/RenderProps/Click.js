export default function Click({ count, onHandler }) {
    return (
        <div>
            <br />
            <button type="button" onClick={onHandler}>
                Click {count} times
            </button>
        </div>
    );
}
