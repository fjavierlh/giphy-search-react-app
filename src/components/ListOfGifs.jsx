import React, {useState, useEffect} from "react";
import getGifs from "../service/getGifs";
import Gif from './Gif';
import './ListOfGifs.css';

function ListOfGifs({params}) {
    const {keyword} = params;
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({keyword})
        .then(gifs => setGifs(gifs));
    }, [keyword]);

    return <div className='ListOfGifs'>
        {
            gifs.map(({id, title, url}) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}

export default ListOfGifs;