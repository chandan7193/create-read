import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Header from "./Header";



class UsersNew extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const last_name = this.getLastName.value;
    const class_name = this.getClassName.value;


    const data = {
      id: new Date(),
      name,
      last_name,
      class_name
   }

   this.props.dispatch({
    type: "ADD_USER",
    data
  });
    var x = document.getElementById("snackbar");
  x.className = "show";


setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    this.getName.value = "";
    this.getLastName.value = "";
    this.getClassName.value = "";
  }
  render(){
    return(
      <div>
      <Header/>
      <div className="row">
          <div className="col-md-2 col-6">
            <div className="halfrounded">
              <p style={{ marginTop: "1rem", backgroundColor: "#D6E9FF" }}>
                Personal Info
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <label className="labelling">Name</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getName = input)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <label className="labelling">LastName</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getLastName = input)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <label className="labelling">Class</label>
                <br />
                <input
                  required
                  type="number"
                  min="1" max="10"
                  ref={input => (this.getClassName = input)}
                  className="form-control"
                />
              </div>


            </div>

            <br />
            <br />
            <div className="float-right">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "150px", backgroundColor: "#4397FF" }}>
                Save
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to="/"
                className="btn btn-primary"
                style={{ width: "150px", backgroundColor: "#4397FF" }}>
                Next
              </Link>
            </div>
          </div>
        </form>

        <div id="snackbar">Student data successfully added..</div>
        <br />
        <br />
        <br />

      </div>
    )
  }
  }

export default connect()(UsersNew);
