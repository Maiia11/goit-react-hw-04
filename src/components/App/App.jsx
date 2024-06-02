
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import {getImageGallery} from '../image-gallery-api'
 import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';

function App() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchImageGallery() {
      try {
        setLoading(true);
        const data = await getImageGallery("sun");
        console.log(data);
        setGallery(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImageGallery()
  }, [])

  
  return (
    <>
      
      <SearchBar />
      <ImageGallery gallery={gallery} /> 
      <Loader/>
      
      

    </>
  )

  
  
}

export default App
