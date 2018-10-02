import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import User from "./User";


class UsersIndex extends Component {


  render() {
    let users = this.props.users.users
    console.log(users);
    return (
      <div>
        <Header />
        <User data = {users}/>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    users: state
  };
};
export default connect(mapStateToProps)(UsersIndex);
