import formatDate from '../formatDate';

describe('formatDate', () => {
  test('render correct date', () => {
    expect(formatDate('2022-09-15T00:08:54.000Z')).toBe('15.09.2022, 03:08:54');
  });

  test('render incorrect date', () => {
    expect(formatDate(' ')).toBe(' ');
  });
});
