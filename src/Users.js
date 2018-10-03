import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import User from "./User";


class UsersIndex extends Component {


  render() {
    let users = this.props.users.users

    return (
      <div>
        <Header />
        <User data = {users}/>
        <div className="container">
        <div className ="row">
          <div className="col-md-4 offset-md-4">
            <Link to="/users/new">
                <div className="boxed textAlignCenter padding25">
                  <i className="fa fa-plus fa-2x" aria-hidden="true" />
                  <p>Add New User</p>
                </div>
              </Link>
          </div>
          </div>
        </div>
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
