

const ImageCard = ({ url, alt, onClick, regular }) => {
  return (
    <div>
      <img src={url} alt={alt} onClick={() => onClick(regular)} />
</div>
  )
}

export default ImageCard