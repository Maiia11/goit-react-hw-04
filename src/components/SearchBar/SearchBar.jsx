import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
        const topic = form.elements.topic.value;
        if (topic.trim() === "") {
            toast.error('Fill the field')
            return
        }
    onSubmit(topic); 
    form.reset();
  }

  return (
    <header className={css.container}>
    <Toaster position="top-right" />
  <form onSubmit={handleSubmit}>
    <input className={css.input} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" name="topic"/>
    <button className={css.btn} type="submit">Search</button>
  </form>    
</header>
  )
}

export default SearchBar