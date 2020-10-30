import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Header } from 'app/default';
import { setUser } from '../../../application/modules/default/auth/action';

const MainComponent = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    authReducer: { session },
  } = useSelector(state => state);

  useEffect(() => {
    if (!session) {
      const user = localStorage.getItem('session');
      if (user) dispatch(setUser(JSON.parse(user)));
      else {
        history.push('/login');
      }
    }
  }, [session]);

  return (
    <div>
      <Header></Header>
      main component
    </div>
  );
};

export default MainComponent;
