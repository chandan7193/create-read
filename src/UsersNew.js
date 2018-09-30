import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Header from "./Header";



class UsersNew extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const lastname = this.getLastName.value;
    const classname = this.getClassName.value;


    const data = {
      id: new Date(),
      name,
     lastname,
     classname
   }

     this.props.dispatch({
      type: "ADD_USER",
      data
    });


    this.getName.value = "";
    this.getLastName.value = "";
    this.getClassName.value = "";
  }
  render(){
    return(
      <div>
      <Header/>
      </div>
    )
  }

  }


export default connect()(UsersNew);
