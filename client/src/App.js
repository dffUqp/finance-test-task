import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setConnect } from './store/reducer/finannce/financeSlice';
import styled from '@emotion/styled';
import FinanceBlock from './components/FinanceBlock';
import { socket } from './helpers';

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
      <FinanceBlock />
    </Wrapper>
  );
}

export default App;
