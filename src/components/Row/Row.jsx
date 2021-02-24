
import RowPoster from '../RowPoster/RowPoster';
import useFetch from '../../hooks/useFetch';

const Row = ({title, fetchUrl}) => {

    const [response, loading, hasError] = useFetch(fetchUrl);
        
    return (
        <div className='Row'>
            <h3>{title}</h3>

            {   loading && <div>Loading...</div>  }
            {   hasError && <div>Error occured.</div>  }
            {
                response.map(({id, poster_path, title}) => (
                    <RowPoster key={id} id={id} poster_path={poster_path} title={title} />
                ))
            }
        </div>
    )
}

export default Row
