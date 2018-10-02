import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';

import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


class User extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' hidden={true}>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='last_name'>
            LastName
          </TableHeaderColumn>
          <TableHeaderColumn dataField='class_name'>
            Class
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default User;
