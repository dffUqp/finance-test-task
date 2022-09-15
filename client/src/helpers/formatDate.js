const formatDate = (value) => {
  const result = new Date(value).toLocaleString();
  if (result === 'Invalid Date') {
    return ' ';
  }
  return result;
};

export default formatDate;
