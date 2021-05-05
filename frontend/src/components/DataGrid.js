import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { render } from 'react-dom';


class DataGrid extends Component {

    constructor(props) {
        super(props);
        this.onGridReady = this.onGridReady;
        this.state = {
            columnDefs: [
                {
                    field: 'name',
                    headerName: 'Name',
                    width: 150,
                    suppressSizeToFit: true,
                },
                {
                    field: 'client',
                    headerName: 'Client Name',
                    width: 90,
                    minWidth: 50,
                    maxWidth: 150,
                },
                {
                    field: 'start_date',
                    headerName: 'Start Date',
                    width: 120,
                },
                {
                    field: 'end_date',
                    headerName: 'End Date',
                    width: 90,
                },
                {
                    field: 'status',
                    headerName: 'Status',
                    width: 100
                }
            ],
            defaultColDef: { resizable: true },
            rowData: null,
        };

      
    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
        const updateData = (data) => {
            console.log(data)
          this.setState({ rowData: data });
        };
    
        fetch('/api/project/')
          .then((resp) => resp.json())
          .then((data) => updateData(data));

          this.gridApi.sizeColumnsToFit();
      };


    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: '50vh', width: 'calc(95vw - 400px)' }}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    rowData={this.state.rowData}
                    onGridReady={this.onGridReady}
                />
            </div>
        )
    }
}

export default DataGrid;