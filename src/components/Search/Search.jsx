import './Search.css';
import BotonLuz from '../BotonLuz/BotonLuz.jsx';
import { ImSearch } from 'react-icons/im';

function Search() {
  return (
    <>
      <div className='search'>
        <div className='search-box'>
          <input type="text" name="busqueda" className="search-input" placeholder='Busca lo que quieras' />
          <ImSearch className='search-icono' />
        </div>
        <BotonLuz />
      </div>
    </>
  )
}

export default Search;