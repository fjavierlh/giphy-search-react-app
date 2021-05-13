import API_KEY from './config';

export default async function getRandomGif() {
    const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

    return await fetch(apiURL)
                    .then(res =>  res.json())
                    .then(respone => {
                        const {data} = respone;
                        const randomGif = data.map(image => {
                            const {images, title, id} = image;
                            const {url} = images.downsized_medium;

                            return {id, title, url};
                        })
                        return randomGif;
                    }).catch(e => console.log(e));
}