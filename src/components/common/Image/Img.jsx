const Img = ({path,altText,ImgClass}) => {
        return (
            <img src={path} alt={altText} className={`${ImgClass}`}/>
        )
}


export default Img;