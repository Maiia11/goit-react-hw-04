

const ImageCard = ({ url, alt, onClick, regular }) => {
  console.log(regular);
  return (
    <div>
  <img src={url} alt={alt} onClick={()=>onClick(regular)}/>
</div>
  )
}

export default ImageCard