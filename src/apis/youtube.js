import axios from 'axios';

const KEY = 'AIzaSyAOlXoqobQQeLgu9nF_Xs-kvJAKS3lYKpo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
