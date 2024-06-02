
// import { useEffect } from 'react';
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import {getImageGallery} from '../image-gallery-api'

// import axios from 'axios';

// const key = 'zDei0CTQ82bIpGgBAWl-KIKshW8lXqg3k_pY_IM5bRY';



function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function fetchImageGallery() {
      try {
        const data = await getImageGallery("office");
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
      

    </>
  )

  
  
}

export default App
