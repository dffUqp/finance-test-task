import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {
  AcordionItem,
  ChangePrice,
  Income,
  Price,
  Title,
} from './partials/AcordionItems';
import { formatDate, formatCurenncy } from '../../helpers';

const FinnanceItem = ({
  ticker,
  price,
  change,
  yield: yeild_,
  last_trade_time,
}) => {
  return (
    <Accordion data-testid="ticker-item" disableGutters>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <AcordionItem>
          <Title>{ticker}</Title>
          <Price>{formatCurenncy(price)}</Price>
          <ChangePrice upOrDown={price - change > 0}>
            {formatCurenncy(price - change)}
          </ChangePrice>
          <Income upOrDown={yeild_ > 0.99}>{yeild_}</Income>
        </AcordionItem>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>last trade time: {formatDate(last_trade_time)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FinnanceItem;
