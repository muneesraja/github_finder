import React, { Component } from "react";
import Card from "../logic/Card";

export default class Content extends Component {
  render() {
    return (
      <div className="row">
        {this.props.users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
