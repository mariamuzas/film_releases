const Film = ({children, url}) => {

    return (
        <>
        <li><a target="_blank" href={url}>{children}</a></li>
        </>
    )
}
export default Film; 