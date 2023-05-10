import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:49775', 
    // timeout: 3000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;