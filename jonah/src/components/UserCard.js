import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.avatar_url} alt="user avatar" />
        {this.props.user.login}
      </div>
    );
  }
}

export default UserCard;
