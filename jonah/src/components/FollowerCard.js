import React from "react";

class FollowerCard extends React.Component {
  render() {
    return (
      <div className="FollowerCard">
        <img src={this.props.follower.avatar_url} alt="user avatar" />
        <h1> {this.props.follower.login}</h1>
      </div>
    );
  }
}
export default FollowerCard;
