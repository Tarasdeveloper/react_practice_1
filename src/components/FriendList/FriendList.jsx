import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Friendship } from './FriendList.styled';
// import PropTypes from 'prop-types'

const FriendList = (props) => {
  return (
    <Friendship>
      {props.friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Friendship>
  );
};

// FriendList.propTypes = {}

export default FriendList;
