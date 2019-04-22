import {
  ADD_POST,
  GET_POST,
  PROFILE_LOADING,
  DELETE_POST
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        laoding: true
      };
    case GET_POST:
      return {
        ...state,
        profile: action.payload,
        laoding: false
      };
    case ADD_POST:
      return {
        ...state,
        profiles: action.payload,
        laoding: [action.payload, ...state.posts]
      };
    case DELETE_POST:
        return {
          ...state,
          profile: state.posts.filter(post => post.id !== action.payload)
        };
    default:
      return state;
  }
}
