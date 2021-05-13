import './Gif.css'

function Gif({id, title, url}) {
    const MAX_TITLE_LENGTH = 30
    title = title.length > MAX_TITLE_LENGTH ? title.substring(0, MAX_TITLE_LENGTH).concat('...') : title;

    return (
        <a className='Gif' href={`#${id}`}>
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </a>
      );
}

export default Gif;
