import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, medium_cover_image, title, summary, genres}) {
    return <div>
        <img src={medium_cover_image} alt={title} />
        <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
        <p>{summary}</p>
        <ul>
            {genres.map(genre =>
                <li key={genre}>{genre}</li>
            )}
        </ul>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;