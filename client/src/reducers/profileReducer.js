import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        laoding: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        laoding: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        laoding: false
      };
    case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          profile: null
        };
    default:
      return state;
  }
}
