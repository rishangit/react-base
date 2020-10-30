import React from 'react';
import { Icon } from 'sys/container';
import { useDispatch } from 'react-redux';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { logOutAttempt } from '../../auth/action';

const LoggedUserComponent = props => {
  const dispatch = useDispatch();
  const handleLogout = e => {
    dispatch(logOutAttempt());
  };

  return (
    <Icon right onClick={handleLogout}>
      <AccountCircleOutlinedIcon />
    </Icon>
  );
};

export default React.memo(LoggedUserComponent);
