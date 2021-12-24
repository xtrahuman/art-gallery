import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configurStore';
import DetailsPage from '../component/DetailsPage';
import ArtList from '../component/ArtList';
import ArtContainer from '../component/ArtContainer';

describe('test all components snapshots', () => {
  test('matches details page', () => {
    const details = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    ).toJSON();

    expect(details).toMatchSnapshot();
  });

  test('matches artlist', () => {
    const artlist = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <ArtList art={[
            {
              title: 'name',
              id: 124,
              displayDate: '1245',
            },
            {
              title: 'name',
              id: 124,
              displayDate: '1245',
            },
          ]}
          />
        </Router>
        ,
      </Provider>,
    ).toJSON();

    expect(artlist).toMatchSnapshot();
  });

  test('matches Artcontainer', () => {
    const Artcontain = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <ArtContainer />
        </Router>
      </Provider>,
    ).toJSON();

    expect(Artcontain).toMatchSnapshot();
  });
});
