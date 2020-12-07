import Film from './Film'

const FilmReleases = ({films}) => {
    const filmList = films.map( film => {
        return (
            <Film key= {film.id} url= {film.url}> {film.name} </Film>
        )

    })

    return(
        <>
        <ul>
            {filmList}
        </ul>
        </> 
    )
}

export default FilmReleases;