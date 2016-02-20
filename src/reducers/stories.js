import * as actions from '../constants/stories';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload = {}} = action;
  const {id} = payload;

  switch (type) {

  case actions.FETCH_SUCCESS:
    return {
      ...state,
      [id]: {
        ...state[id],
        fetching: false,
        ...payload
      }
    };

  case actions.FETCH_START:
    return {
      ...state,
      [id]: {
        ...state[id],
        fetching: true
      }
    };

  case actions.JOINING:
    return {
      ...state,
      [id]: {
        ...state[id],
        joining: true,
        data: []
      }
    };

  case actions.RECEIVE_DATA:
    return {
      ...state,
      [id]: {
        ...state[id],
        joining: false,
        data: payload.data || []
      }
    };

  case actions.APPEND_DATA:
    return {
      ...state,
      [id]: {
        ...state[id],
        joining: false,
        data: [
          ...(state[id].data || []),
          payload.data
        ]
      }
    };

  default:
    return state;

  }
};
