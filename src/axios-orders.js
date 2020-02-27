import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-dm.firebaseio.com/'
});

export default instance;