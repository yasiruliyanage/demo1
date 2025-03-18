const Logo = ({path,altText,logoClass}) => {

    return (
        <img src={path} alt={altText} className={`${logoClass}`}/>
    )
}

export default Logo;