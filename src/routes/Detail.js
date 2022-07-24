import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            const response = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json()
            console.log(response)
            setLoading(false);
            setMovie(response.data.movie)
        }
        getMovie();
    }, [id]);

    return <div>{loading ? 
    <h1>loading</h1> : 
    <div>
    <h1>
        {movie.title}
    </h1>
    <img src={movie.medium_cover_image} alt={movie.title} width="200"/>
    <p>
        {movie.description_full}
    </p>
    </div>}
    <button>
        <Link to="/react_tutorial_2">Home</Link>
    </button>
    </div>
}

export default Detail;