import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {
  AcordionItem,
  ChangePrice,
  Income,
  Price,
  Title,
} from './partials/AcordionItems';
import { formatCurenncy } from '../../helpers';
import FinanceGraph from '../FinanceGraph';

const FinanceItem = ({ ticker, price, change, yield: yeild_ }) => {
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
      <AccordionDetails sx={{ width: '100%', height: 200 }}>
        <FinanceGraph tickerName={ticker} />
      </AccordionDetails>
    </Accordion>
  );
};

export default FinanceItem;
