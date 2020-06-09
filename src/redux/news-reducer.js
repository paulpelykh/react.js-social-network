const SET_NEWS = 'SET_NEWS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    newsType: 'all',
    news: [],
    isFetching: true
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case SET_NEWS: {
            return {
                ...state,
                news: action.news,
            }
        }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setNews = (news) => ({ type: SET_NEWS, news });

export default newsReducer;