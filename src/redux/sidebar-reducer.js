
let initialState = {
    friends: [
        { id: 1, name: 'Paul', image: "https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg" },
        { id: 2, name: 'Vasya', image: "https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg" },
        { id: 3, name: 'Valerya', image: "https://img.rg.ru/img/content/153/10/69/1_d_850.jpg" },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;  