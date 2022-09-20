import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import FinanceItem from '../FinanceItem';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../helpers';

import { setData } from '../../store/reducer/finannce/financeSlice';
import {
  getConnectStatus,
  getLastData,
} from '../../store/reducer/finannce/selectors';

const FinanceBlock = () => {
  const connect = useSelector((state) => getConnectStatus(state));
  const lastData = useSelector((state) => getLastData(state));

  const dispatch = useDispatch();

  useEffect(() => {
    if (connect) {
      socket.on('ticker', (data) => {
        dispatch(setData(data));
      });
    }

    return () => {
      socket.off('ticker');
    };
  }, [dispatch, connect]);

  return (
    <Container maxWidth="sm">
      {lastData?.map((item, index) => (
        <FinanceItem {...item} key={index} />
      ))}
    </Container>
  );
};

export default FinanceBlock;
