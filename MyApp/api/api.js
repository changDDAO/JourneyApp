const api = axios.create({
    baseURL: 'https://reactnative.dev',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    params:{
        // api_key: 'MY_API_KEY'
    }
});

export default api;