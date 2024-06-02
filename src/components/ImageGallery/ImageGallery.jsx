 import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({ gallery }) => {
    return (
        <ul>
            {gallery.map(({ id, urls:{small}, alt_description }) => {
                return (
                <li key={id}>
                        <ImageCard url={small} alt={alt_description } />
                        
                    </li>
                   
                )
            })}
            
        </ul>
         

)}
	

export default ImageGallery