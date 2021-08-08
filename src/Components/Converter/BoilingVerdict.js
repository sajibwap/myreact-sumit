export default function BoilingVerdict(props) {
    const { celsius } = props;
    if (celsius >= 100) {
        return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>;
}
