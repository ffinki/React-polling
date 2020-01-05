const axios = require('axios');

export async function get(url, params) {
    return axios.get(url, {params});
};