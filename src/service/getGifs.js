import API_KEY from './config.js';

export default async function getGifs({keyword = 'hello'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`;
    
    return await fetch(apiURL)
                    .then(res => res.json())
                    .then(respone => {
                        const {data} = respone;
                        const gifs = Array.isArray(data) ?
                        data.map(image => {
                            const {images, title, id} = image;
                            const {url} = images.downsized_medium;

                            return {id, title, url};
                        }) : [];
                        return  gifs;
                    }).catch(e => console.log(e));
}