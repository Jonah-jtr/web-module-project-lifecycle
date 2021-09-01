import React from "react";

class FollowerCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.follower.avatar_url} alt="user avatar" />
        {this.props.follower.login}
      </div>
    );
  }
}
export default FollowerCard;
