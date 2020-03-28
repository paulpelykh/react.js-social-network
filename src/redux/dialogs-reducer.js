const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi', readen: true },
        { id: 2, message: 'How are you?', readen: false },
        { id: 3, message: 'Valerya', readen: false },
        { id: 4, message: 'Nastya', readen: true },
        { id: 5, message: 'Lana', readen: true },
        { id: 6, message: 'John', readen: false },
    ],
    dialogs: [
        { id: 1, name: 'Paul', image: "https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg" },
        { id: 2, name: 'Vasya', image: "https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg" },
        { id: 3, name: 'Valerya', image: "https://img.rg.ru/img/content/153/10/69/1_d_850.jpg" },
        { id: 4, name: 'Nastya', image: "https://vignette.wikia.nocookie.net/character-power/images/8/87/Over_9000.jpg/revision/latest?cb=20140516173853&path-prefix=ru" },
        { id: 5, name: 'Lana', image: "https://media.wired.com/photos/5d16922d7c01a40008fc09b6/2:1/w_1440,h_720,c_limit/Phillips-Neon-Genesis-Evangelion.jpg" },
        { id: 6, name: 'John', image: "https://regnum.ru/uploads/pictures/news/2018/11/27/regnum_picture_154331949087286_normal.jpg" },
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body, readen: false });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;