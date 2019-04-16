import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  profile: false
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
        profile: action.profile,
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
