import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <div className="userImages">
          <img src={this.props.user.avatar_url} alt="user avatar" />
        </div>

        <div className="userInfo">
          <h1>{this.props.user.name}</h1>
          <h2> User: {this.props.user.login}</h2>
          <h4>{this.props.user.location}.</h4>
          <h4>Followers: {this.props.user.followers}</h4>
          <h4>Following: {this.props.user.following}</h4>
          <a href={this.props.user.html_url} target="_blank">
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default UserCard;
