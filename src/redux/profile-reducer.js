const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you?'},
        { id: 2, message: 'its my first post'},
        { id: 3, message: 'hello'},
        { id: 4, message: 'blabla'},
    ],
    newPostText: 'Hi my name is Paul Pelykh',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {  
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });

export default profileReducer;