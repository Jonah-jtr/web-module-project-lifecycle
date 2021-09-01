import React from "react";
import axios from "axios";
import "./App.css";
import FollowerList from "./components/FollowerList";
import UserCard from "./components/UserCard";
class App extends React.Component {
  state = {
    startingUser: "jonahjtr",
    user: {},

    followers: [],
  };
  componentDidMount() {
    console.log("mounted");
    axios
      .get(`https://api.github.com/users/${this.state.startingUser}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      });
    axios
      .get(`https://api.github.com/users/${this.state.startingUser}/followers`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      });
  }
  render() {
    console.log("---followers login---", this.state.followers[0]);
    console.log("----user login--", this.state.user.login);

    return (
      <div className="app">
        <div className="userContainer">
          <UserCard user={this.state.user} />
        </div>
        <div className="followerContainer">
          <FollowerList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}
export default App;
