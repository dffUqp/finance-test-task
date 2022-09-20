import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { formatDate } from '../../helpers';
import moment from 'moment';
import { getLastData } from '../../store/reducer/finannce/selectors';

const FinanceGraph = ({ tickerName }) => {
  const data = useSelector((state) => getLastData(state));
  const [dataGraph, setDataGraph] = useState([
    {
      time: moment.utc().format('hh:mm'),
      price: 0,
    },
  ]);

  useEffect(() => {
    const currentTicker = data.find((item) => item.ticker === tickerName);
    setDataGraph((prevState) => [
      ...prevState,
      {
        time: formatDate(currentTicker.last_trade_time, 'hh:mm:ss'),
        price: currentTicker.price,
      },
    ]);
  }, [tickerName, data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={dataGraph}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis interval="preserveStartEnd" dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default FinanceGraph;
