import css from './ImageCard.module.css'

const ImageCard = ({ url, alt, onClick, regular }) => {
  return (
    <div>
      <img className={css.img} src={url} alt={alt} onClick={() => onClick(regular)} />
</div>
  )
}

export default ImageCard