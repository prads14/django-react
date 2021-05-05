import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { render } from 'react-dom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "loading",
            rowData: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 }
            ]
        }

    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    rowData={this.state.rowData}>
                    <AgGridColumn field="make"></AgGridColumn>
                    <AgGridColumn field="model"></AgGridColumn>
                    <AgGridColumn field="price"></AgGridColumn>
                </AgGridReact>
            </div>
        )
    }
}

export default App;

const container = document.getElementById('app');

render(<App />, container);