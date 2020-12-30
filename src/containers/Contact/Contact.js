import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // console.log('problem ==> ', this.props)
    const route = this.props.match.path
    this.props.updateRoute(route.substring(1, route.length))
  }
  
  render() {
    return (
      <div>
        <h3>Welcome to Contact</h3>
      </div>
    );
  }
}

export default Contact;
