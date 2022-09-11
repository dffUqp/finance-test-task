import { useEffect } from 'react';
import socket from './socket';
import ListItem from './components/FinannceBlock';
import { useDispatch } from 'react-redux';
import { setConnect } from './store/reducer/financeSlice';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('connect_error', () => {
      setTimeout(() => {
        socket.connect();
      }, 1000);
    });

    socket.on('connect', () => {
      socket.emit('start');
      dispatch(setConnect(true));
    });

    socket.on('disconnect', () => {
      dispatch(setConnect(false));
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connect_error');
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <ListItem />
    </Wrapper>
  );
}

export default App;
