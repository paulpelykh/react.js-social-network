import * as axios from 'axios';

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => {
            return response.data
        });
}

export const getNews = (newsType, date) => {
    return axios.get(`http://newsapi.org/v2/everything?q=${newsType}&from=${date}&sortBy=publishedAt&apiKey=f7eedccf68304f6e81c63506458ae03b`)
        .then(response => {
            return response.data.articles;
        });
}