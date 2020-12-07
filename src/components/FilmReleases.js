import Film from './Film'

const FilmReleases = ({films}) => {
    const filmList = films.map( film => {
        return (
            <Film key= {film.id} url= {film.url}> {film.name} </Film>
        )

    })

    return(
        <>
        <h3>Film releases List</h3>
        <ul>
            {filmList}
        </ul>
        </> 
    )
}

export default FilmReleases;