import React from 'react';
import Bracket from './Components/Composition/Bracket';
import Emoji from './Components/Composition/Emoji';
import Text from './Components/Composition/Text';

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
            </div>
        );
    }
}
export default App;
