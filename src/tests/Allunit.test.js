import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configurStore';
import DetailsPage from '../component/DetailsPage';
import ArtList from '../component/ArtList';
import ArtContainer from '../component/ArtContainer';

describe('test all components unit render', () => {
  test('checks ArtContainer render', () => {
    const rendered = render(
      <Provider store={store}>
        <Router>
          <ArtContainer />
        </Router>
      </Provider>,
    );

    const div = rendered.container.querySelector('div');
    expect(div.className).toBe('allPages');
  });

  test('checks DetailsPage render', () => {
    const Details = render(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    );
    const newDiv = Details.container.querySelector('div');
    expect(newDiv.className).toBe('checkDetails');
  });

  test('checks ArtList render', () => {
    const Art = render(
      <Provider store={store}>
        <Router>
          <ArtList />
        </Router>
      </Provider>,
    );
    const artl = Art.container.querySelector('div');
    expect(artl.className).toBe('checkArt');
  });
});
