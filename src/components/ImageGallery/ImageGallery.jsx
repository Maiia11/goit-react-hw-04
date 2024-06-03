 import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ gallery, onClick }) => {

    return (
        <ul className={css.list}>
            {gallery.map(({ id, urls: { small, regular }, alt_description }) => {
                
                return (
                <li key={id}>
                        <ImageCard url={small} alt={alt_description} regular={regular} onClick={onClick} />
                        
                    </li>
                   
                )
            })}
            
        </ul>
         

)}
	

export default ImageGallery