
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import {getImageGallery} from '../image-gallery-api'
 import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const modalParams = {
  isOpen: false,
  url: ''
};




function App() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(modalParams);

  const handleImageClick = (url) => {
    modalIsOpen({ isOpen: true, url })
    
  }

  
  const handleCloseModal = ()  =>{
    setIsOpen(modalParams);
  }

  useEffect(() => {
    async function fetchImageGallery() {
      try {
        setError(false);
        setLoading(true);
        const data = await getImageGallery(query, page);
        console.log(data);
        setGallery((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
  query && fetchImageGallery()
  }, [query, page])

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery)
    setGallery([])
    setPage(1)

  }

  const handleLoadMore = async () => {
    setPage(page + 1)
  }

  
  return (
    <>
      
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {gallery.length > 0 && <ImageGallery gallery={gallery} onClick={handleImageClick} />}
      {loading && <Loader />}
      {gallery.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
       
      
      
      

    </>
  )

  
  
}



export default App
