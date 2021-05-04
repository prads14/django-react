import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "loading"
        }
    }

    render() {
        return (
            <div>
                this is the react page
            </div>
        )
    }
}

export default App;

const container = document.getElementById('app');

render(<App/>, container);