import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <div className="userImages">
          <img src={this.props.user.avatar_url} alt="user avatar" />
        </div>
        {this.props.user.login}
      </div>
    );
  }
}

export default UserCard;
