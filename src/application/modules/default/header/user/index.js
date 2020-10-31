import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Icon, Image, DropMenu, DropOption, FlexRow } from 'sys/container';
import { useOnClickOutside } from 'sys/hooks';
import { logOutAttempt } from '../../auth/action';
import { options, optionsType } from './constant';
import UserDetailsComponent from './userDetails';

const LoggedUserComponent = props => {
  const {
    authReducer: { session },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  const handleShowModel = e => {
    setModalOpen(prev => !prev);
  };

  const handleOptClick = val => {
    switch (val) {
      case optionsType.logOut:
        dispatch(logOutAttempt());
        break;

      default:
        break;
    }
  };

  return (
    <FlexRow right ref={ref}>
      <Icon onClick={handleShowModel}>
        {session ? (
          <Image alt={session.firstName} src={session.avatar} />
        ) : (
          <AccountCircleOutlinedIcon />
        )}
      </Icon>
      {isModalOpen && (
        <DropMenu key={Math.random()} top={'2.7rem'} right={'0'} padding={'0'}>
          {session && <UserDetailsComponent session={session} />}
          {options.map(({ text, ...rest }, inx) => (
            <DropOption
              key={inx}
              {...rest}
              onClick={() => handleOptClick(rest.value)}
            >
              {text}
            </DropOption>
          ))}
        </DropMenu>
      )}
    </FlexRow>
  );
};

export default React.memo(LoggedUserComponent);
