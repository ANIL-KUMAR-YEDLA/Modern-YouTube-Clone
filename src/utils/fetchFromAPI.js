import axios from 'axios'; 

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: 70,
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': '3f665f0ef0msh665cf461859b6aep1c92a2jsn019e05e3802c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };

  