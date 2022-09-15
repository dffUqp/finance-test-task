import FinannceBlock from '.';
import { renderWithRedux } from '../../helpers';

describe('FinannceBlock', () => {
  test('should render list', () => {
    const { getAllByTestId } = renderWithRedux(<FinannceBlock />, {
      finannce: {
        data: [
          {
            ticker: 'FB',
            exchange: 'NASDAQ',
            price: '185.93',
            change: '182.82',
            change_percent: '0.84',
            dividend: '0.96',
            yield: '1.88',
            last_trade_time: '2022-09-14T22:53:04.000Z',
          },
          {
            ticker: 'TSLA',
            exchange: 'NASDAQ',
            price: '163.08',
            change: '21.19',
            change_percent: '0.51',
            dividend: '0.62',
            yield: '0.07',
            last_trade_time: '2022-09-14T22:53:04.000Z',
          },
        ],
        connect: true,
      },
    });

    const tickers = getAllByTestId('ticker-item');

    expect(tickers.length).toBe(2);
  });

  test('should not render list', () => {
    const { queryAllByTestId } = renderWithRedux(<FinannceBlock />, {
      finannce: {
        data: [],
        connect: true,
      },
    });

    const tickers = queryAllByTestId('ticker-item');

    expect(tickers.length).toBe(0);
  });
});
