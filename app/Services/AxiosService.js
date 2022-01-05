


export const questionAPI = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy',
    timeout: 3000
})