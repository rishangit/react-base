import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Image } from 'sys/container';
import { useDispatch } from 'react-redux';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { logOutAttempt } from '../../auth/action';

const LoggedUserComponent = props => {
  const {
    authReducer: { session },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleLogout = e => {
    dispatch(logOutAttempt());
  };

  return (
    <Icon right onClick={handleLogout}>
      {session ? (
        <Image alt={session.firstName} src={session.avatar} />
      ) : (
        <AccountCircleOutlinedIcon />
      )}
    </Icon>
  );
};

export default React.memo(LoggedUserComponent);
