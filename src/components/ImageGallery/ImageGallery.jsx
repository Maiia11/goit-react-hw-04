 import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({ gallery, onClick}) => {
    return (
        <ul>
            {gallery.map(({ id, urls:{small, regular}, alt_description }) => {
                return (
                <li key={id}>
                        <ImageCard url={small} alt={alt_description} onClick={()=> onClick(regular) } />
                        
                    </li>
                   
                )
            })}
            
        </ul>
         

)}
	

export default ImageGallery