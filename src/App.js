import React from 'react';
import Form from './Components/formHandling/Form';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* <Clock enable={false} /> */}
                <Form />
            </div>
        );
    }
}
export default App;
