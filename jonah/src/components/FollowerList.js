import React from "react";
import FollowerCard from "./FollowerCard";
class FollowerList extends React.Component {
  render() {
    return (
      <div>
        {this.props.followers.map((follower) => {
          return <FollowerCard follower={follower} />;
        })}
      </div>
    );
  }
}
export default FollowerList;
