/* eslint-disable no-shadow */
export default function Text({ addEmoji, addBracket }) {
    let text = 'I love Bangladesh';

    if (addEmoji) {
        text = addEmoji(text, '@');
    }
    if (addBracket) {
        text = addBracket(text);
    }

    return <>{text}</>;
}
