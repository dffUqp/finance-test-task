export const getConnectStatus = (state) => state.finance.connect;

export const getLastData = (state) => state.finance.data.at(-1);

export const getData = (state) => state.finance.data;
