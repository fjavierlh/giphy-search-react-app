import './SearchForm.css';

function SearchForm({keyword, setKeyword, location, setLocation}) {
    return (
    <div className='SearchForm'>
        
        <input type='text' onChange={(e) =>  {
            setKeyword(e.target.value);
        }
        } />
        <button className='search-btn btn' onClick={() => {
            keyword !== '' ? setLocation(`/gif/${keyword}`) : setLocation(location);
        }}>
        Search GIFs
        </button>
        <button className='random-btn btn' onClick={() => {
            
        }}>
            Random GIF
        </button>
    </div>)
}

export default SearchForm;