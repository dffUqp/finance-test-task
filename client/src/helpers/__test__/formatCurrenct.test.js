import formatCurrency from '../formatCurrency';

describe('formatCurrency', () => {
  let IntlTest;

  beforeAll(() => {
    IntlTest = new Intl.NumberFormat(undefined, {
      currency: 'USD',
      style: 'currency',
    });
  });

  test('must return formatted value', () => {
    expect(formatCurrency(123)).toBe(IntlTest.format(123));
  });

  test('should return a warning', () => {
    expect(formatCurrency('incorrect value')).toBe(
      IntlTest.format('incorrect value')
    );
  });
});
