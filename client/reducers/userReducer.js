import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  longitude: '',
  latitude: '',
  bio: '',
  distance: 50,
  verified: null,
  error: null,
  needsToSignup: false,
  userCreated: false,
  artRecieved: false,
  art: [],
  logout: false,
  clearLogout: '',
};

const userReducer = (state = initialState, action) => {
  let newVerified;
  let newError;
  let newUsername;
  let newPassword;
  let newFirstName;
  let newLastName;
  let newEmail;
  let newLongitude;
  let newLatitude;
  let newBio;
  let newDistance;
  let newNeedsToSignup;
  let newUserCreated;
  let newArtRecieved;
  let newArt;
  let newLogout;
  let newClearLogout;

  switch (action.type) {

    case types.LOGIN_USERNAME:
      newUsername = action.payload.value;
      return {
        ...state,
        username: newUsername,
      };

    case types.LOGIN_PASSWORD:
      newPassword = action.payload.value;
      return {
        ...state,
        password: newPassword,
      };

    case types.SIGNUP_FIRSTNAME:
      newFirstName = action.payload.value;
      return {
        ...state,
        firstName: newFirstName,
      };

    case types.SIGNUP_LASTNAME:
      newLastName = action.payload.value;
      return {
        ...state,
        lastName: newLastName,
      };

    case types.SIGNUP_EMAIL:
      newEmail = action.payload.value;
      return {
        ...state,
        email: newEmail,
      };

    case types.SIGNUP_LONGITUDE:
      newLongitude = action.payload.value;
      return {
        ...state,
        longitude: newLongitude,
      };

    case types.SIGNUP_LATITUDE:
      newLatitude = action.payload.value;
      return {
        ...state,
        latitude: newLatitude,
      };

    case types.SIGNUP_BIO:
      newBio = action.payload.value;
      return {
        ...state,
        bio: newBio,
      };

    case types.UPDATE_DISTANCE:
      newDistance = action.payload.value;
      return {
        ...state,
        distance: newDistance,
      };

    case types.POST_USERNAME_AND_PASSWORD_REQUEST:
      if (!action.payload.payload.data.error) {
        newVerified = true;
      } else {
        alert(action.payload.payload.data.error);
        newVerified = null;
      }

      return {
        ...state,
        password: '',
        latitude: action.payload.payload.data.lat,
        longitude: action.payload.payload.data.lng,
        verified: newVerified,
      };

    case types.POST_USERNAME_AND_PASSWORD_REQUEST_FAILURE:
      newVerified = false;
      console.log('Server Error')
      return {
        ...state,
        verified: newVerified,
      };


    case types.SIGNUP:
      newNeedsToSignup = action.payload;
      return {
        ...state,
        needsToSignup: newNeedsToSignup,
      };

    case types.POST_CREATE_USER_SUCCESS:
      newUserCreated = true;

      console.log('%%% USER SUCCESS ACTION PAYLOAD %%%', action.payload);
      return {
        ...state,
        username: action.payload.payload.username,
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        longitude: action.payload.payload.lng,
        latitude: action.payload.payload.lat,
        bio: '',
        userCreated: newUserCreated,
      };

    case types.POST_CREATE_USER_FAILURE:
      console.log('Server Error When Creating User');
      return {
        ...state,
      };

    case types.POST_GET_ART_SUCCESS:
      newArtRecieved = true;
      newArt = action.payload.payload;

      return {
        ...state,
        artRecieved: newArtRecieved,
        art: newArt,
      };


    case types.POST_GET_ART_FAILURE:
      console.log('Server Error When Obtaining Art')

      return {
        ...state,
      };

    case types.CLEAR_STATE:
      console.log('In clear logout reducer')
      newVerified = null;
      newError = null;
      newUsername = '';
      newPassword = '';
      newFirstName = '';
      newLastName = '';
      newEmail = '';
      newLongitude = '';
      newLatitude = '';
      newDistance = 50;
      newBio = '';
      newNeedsToSignup = false;
      newUserCreated = false;
      newArtRecieved = false;
      newArt = [];
      newLogout = action.payload;

      return {
        username: newUsername,
        password: newPassword,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        longitude: newLongitude,
        latitude: newLatitude,
        distance: newDistance,
        bio: newBio,
        verified: newVerified,
        error: newError,
        needsToSignup: newNeedsToSignup,
        userCreated: newUserCreated,
        artRecieved: newArtRecieved,
        art: newArt,
        logout: newLogout,
      };

    default:
      return state;
  }
}

export default userReducer;