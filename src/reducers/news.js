import {getNews} from '../lib/newsServices';

const InitialState = {
    news: []
}

export const LOAD_NEWS = 'LOAD_NEWS';

export const loadNews = (news) => ({type: LOAD_NEWS, payload: news})

export const fetchNews = () => {
    return (dispatch) => {
        getNews()
        .then(news => dispatch(loadNews(news)))
    }
}

export default (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return {...state, news: action.payload}
        default:
            return state;
    }
}
