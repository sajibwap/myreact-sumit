import React from 'react';
/* Composition */
import Bracket from './Components/Composition/Bracket';
import Emoji from './Components/Composition/Emoji';
import Text from './Components/Composition/Text';
/* Higher Order Component */
import ClickCounter from './Components/Hoc/clickCounter';
import HoverCounter from './Components/Hoc/hoverCounter';
/* Render Props */
import Click from './Components/RenderProps/Click';
import Counter from './Components/RenderProps/Counter';
import Hover from './Components/RenderProps/Hover';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>From Composition</h1>
                {/* <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji> */}
                <Emoji>
                    {({ addEmoji }) => (
                        <Bracket>
                            {({ addBracket }) => (
                                <Text addEmoji={addEmoji} addBracket={addBracket} />
                            )}
                        </Bracket>
                    )}
                </Emoji>
                <h1>From Higher Order Component</h1>
                <ClickCounter />
                <HoverCounter />
                <h1>From Render Props</h1>
                <Counter>
                    {(count, onHandler) => <Click count={count} onHandler={onHandler} />}
                </Counter>
                <Counter>
                    {(count, onHandler) => <Hover count={count} onHandler={onHandler} />}
                </Counter>
            </div>
        );
    }
}
export default App;
