import { Online } from './FriendListItem.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <li>
      <Online status={isOnline}></Online>
      <img src={avatar} alt={name} width="50" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
