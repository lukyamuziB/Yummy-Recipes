import CategoryReducer from '../../reducers/categoriesReducer';
import { FETCH_CATEGORIES } from '../../actions/actionTypes';

describe('Category reducers change state on', () => {
  it('maintain state', () => {
    expect(CategoryReducer(undefined, { type: 'unexpected' }))
      .toEqual([]);
  });
  it('it maintains state on viewing categories', () => {
    const data = {
      type: FETCH_CATEGORIES,
      payload: {
        categories: {

          items: [
            {
              id: 59,
              name: 'sadfd',
              description: 'asdsf',
              created: '2018-03-15T23:05:48.418854',
              modified: '2018-03-18T01:50:25.977511',
              user_id: 1,
            },
          ],
          page: 1,
          pages: 4,
          per_page: 6,
          total: 21,

        },
      },
    };
    expect(CategoryReducer(undefined, data))
      .toEqual({
        categories: {
          items: [
            {
              id: 59,
              name: 'sadfd',
              description: 'asdsf',
              created: '2018-03-15T23:05:48.418854',
              modified: '2018-03-18T01:50:25.977511',
              user_id: 1,
            },
          ],
          page: 1,
          pages: 4,
          per_page: 6,
          total: 21,
        },
      });
  });
});

