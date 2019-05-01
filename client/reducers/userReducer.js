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
  verified: null,
  error: null,
  needsToSignup: false,
  userCreated: false,
  artRecieved: false,
  art: [],
};

const userReducer = (state = initialState, action) => {
  //declared variables to make sure we update state with new state.
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
  let newNeedsToSignup;
  let newUserCreated;
  let newArtRecieved;
  let newArt;

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

    case types.POST_USERNAME_AND_PASSWORD_SUCCESS:

      console.log('$$$$$ POST USER AND PW SUCCESS');

      newVerified = true;
      return {
        ...state,
        verified: newVerified,
        // May need to reset certain areas of state (error, etc.)
        // error: null
      };
      
      case types.POST_USERNAME_AND_PASSWORD_FAILURE:
      // console.log('IN FAILUREREDUC', action.payload)
      // console.log('IN FAILURE error', action.payload.payload.response.data.error)
      console.log('$$$$$ POST USER AND PW FAILURE');

      newVerified = false;
      //coordinate with backend re err sent back from server//
      newError = action.payload.payload.response.data.error;
      return {
        ...state,
        verified: newVerified,
        error: newError,
      };

      
      case types.SIGNUP:
      console.log('$$$$$ SIGNUP');

      newNeedsToSignup = action.payload;
      return {
        ...state,
        needsToSignup: newNeedsToSignup,
      };
      
      case types.POST_CREATE_USER_SUCCESS:
      console.log('$$$$$ POST CREATE USER SUCCESS');
      newUserCreated = true;
      return {
        ...state,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        longitude: '',
        latitude: '',
        bio: '',
        userCreated: newUserCreated,
      };
      
      case types.POST_CREATE_USER_FAILURE:
      console.log('$$$$$ POST CREATE USER FAILURE');
      return {
        ...state,
      };
      
      case types.POST_GET_ART_SUCCESS:
      console.log('$$$$$ POST GET ART SUCCESS');
      newArtRecieved = true;
      newArt = action.payload.payload;
      console.log('this is newArt ', newArt)
      
      // const newArtParsed = newArt.map(el => {
      //   return (
      //     <div className="artUnit">
      //   <img src={el.image} style={{height: 100 }}></img>
      //   <p className="unitTitle">{el.title}</p>
      //   <p>Artist: {el.artist}</p>
      //   <p>Description: {el.description}</p>
      //   <p>Material: {el.material}</p>
      //   <p>Price: {el.price}</p>
      //   </div>
      //   )
      // })
      
      return {
        ...state,
        artRecieved: newArtRecieved,
        art: newArt,
      };

      
      case types.POST_GET_ART_FAILURE:
      console.log('$$$$$ POST GET ART FAILURE');

      return {
        ...state,
      };

    default:
      return state;
  }
}

export default userReducer;