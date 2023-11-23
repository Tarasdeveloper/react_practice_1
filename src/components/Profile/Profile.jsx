import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Label,
  Name,
  Paragr,
  Profiles,
  Quantity,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Profiles className="profile">
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Paragr className="tag">{tag}</Paragr>
        <Paragr className="location">{location}</Paragr>
      </div>

      <ul className="stats">
        <li>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </li>
        <li>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </li>
        <li>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </li>
      </ul>
    </Profiles>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
