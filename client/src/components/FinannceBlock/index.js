import React, { useEffect } from 'react';

import Container from '@mui/material/Container';
import FinnanceItem from '../FinnanceItem';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../socket';
import { getData } from '../../store/reducer/financeSlice';

const FinannceBlock = () => {
  const { data, connect } = useSelector((state) => state.finannce);
  const dispatch = useDispatch();

  useEffect(() => {
    if (connect) {
      socket.on('ticker', (data) => {
        dispatch(getData(data));
      });
    }

    return () => {
      socket.off('ticker');
    };
  }, [dispatch, connect]);

  return (
    <Container maxWidth="sm">
      {data.map((item, index) => (
        <FinnanceItem {...item} key={index} />
      ))}
    </Container>
  );
};

export default FinannceBlock;
