import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { formatCurrency } from '../../helpers/formatCurenncy';
import {
  AcordionItem,
  ChangePrice,
  Income,
  Price,
  Title,
} from './partials/AcordionItems';

const FinnanceItem = ({ ticker, price, change, income, last_trade_time }) => {
  last_trade_time = new Date(last_trade_time).toLocaleString();

  return (
    <Accordion disableGutters>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AcordionItem>
          <Title>{ticker}</Title>
          <Price>{formatCurrency(price)}</Price>
          <ChangePrice upOrDown={price - change > 0}>
            {formatCurrency(price - change)}
          </ChangePrice>
          <Income upOrDown={income > 0.99}>{income} </Income>
        </AcordionItem>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>last trade time: {last_trade_time}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FinnanceItem;
