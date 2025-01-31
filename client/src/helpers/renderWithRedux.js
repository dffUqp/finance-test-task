import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { setupStore } from '../store';

 const renderWithRedux = (component, preloadedState = {}) => {
  const store = setupStore(preloadedState);

  return render(<Provider store={store}>{component}</Provider>);
};

export default renderWithRedux
