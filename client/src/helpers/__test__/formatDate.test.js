import moment from 'moment';
import formatDate from '../formatDate';

describe('formatDate', () => {
  const testDate = new Date();

  test('render correct date', () => {
    expect(formatDate(testDate)).toBe(moment(testDate).format('DD/MM/YYYY'));
  });

  test('render correct date with format', () => {
    expect(formatDate(testDate, 'hh:mm:ss')).toBe(
      moment(testDate).format('hh:mm:ss')
    );
  });

  test('render incorrect date', () => {
    expect(formatDate(' ')).toBe('');
  });
});
