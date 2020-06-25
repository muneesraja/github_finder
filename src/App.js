import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./component/layout/Navbar";
import Content from "./component/layout/CardList";
import SearchField from "./component/layout/SearchField";

class App extends Component {
  state = {
    users: [],
    text: "",
  };
  async componentDidMount() {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const users = await res.data;
    this.setState({ users: users });
  }

  searchText = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${this.state.text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const users = await res.data;
    this.setState({ users: users.items });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value }, this.searchText);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <SearchField handleChange={this.handleChange} />
        <div className="container">
          <Content users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
