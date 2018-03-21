import RecipesReducer from '../../reducers/recipesReducer';
import { FETCH_RECIPES_SUCCESSFUL } from '../../actions/actionTypes';

describe('Recipes reducers change state on', () => {
  it('maintain state', () => {
    expect(RecipesReducer(undefined, { type: 'unexpected' }))
      .toEqual([]);
  });
  it('maintains state on viewing recipes', () => {
    const data = {
      type: FETCH_RECIPES_SUCCESSFUL,
      payload: {
        recipes: {
          recipes: [
            {
              id: 78,
              name: 'mushroom soup',
              description: 'hooot',
              created: '2018-03-18T22:46:31.285810',
              modified: '2018-03-19T16:28:16.054937',
              category_id: 59,
              user_id: 1,
            },
          ],
          id: 59,
          name: 'sadfd',
          description: 'asdsf',
          created: '2018-03-15T23:05:48.418854',
          modified: '2018-03-18T01:50:25.977511',
          user_id: 1,
        },
      },
    };
    expect(RecipesReducer(undefined, data))
      .toEqual({
        recipes: {
          recipes: [
            {
              id: 78,
              name: 'mushroom soup',
              description: 'hooot',
              created: '2018-03-18T22:46:31.285810',
              modified: '2018-03-19T16:28:16.054937',
              category_id: 59,
              user_id: 1,
            },
          ],
          id: 59,
          name: 'sadfd',
          description: 'asdsf',
          created: '2018-03-15T23:05:48.418854',
          modified: '2018-03-18T01:50:25.977511',
          user_id: 1,
        },
      },
      );
  });
});
