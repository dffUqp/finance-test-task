export const getConnectStatus = (state) => state.finance.connect;

export const getLastData = (state) => state.finance.data[state.finance.data.length - 1];

export const getData = (state) => state.finance.data;
