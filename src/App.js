import React from 'react';
import Bracket from './Components/Composition/Bracket';
import Emoji from './Components/Composition/Emoji';
import Text from './Components/Composition/Text';
import Click from './Components/Hoc/clickCounter';
import Hover from './Components/Hoc/hoverCounter';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <div className="App">
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
                <Click />
                <Hover />
            </div>
        );
    }
}
export default App;
