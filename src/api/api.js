import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '28c27c05-737c-47df-b710-608da0b74bb2'
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}

export const authMe = () => {
    return instance.get(`auth/me`)
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                return { id, login, email };
            }
        });
}

export const getUserProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(respone => {
            return respone.data;
        });
}

export const getNews = (newsType, date) => {
    return axios.get(`http://newsapi.org/v2/everything?q=${newsType}&from=${date}&sortBy=publishedAt&apiKey=f7eedccf68304f6e81c63506458ae03b`)
        .then(response => {
            return response.data.articles;
        });
}