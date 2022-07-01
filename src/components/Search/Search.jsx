import styles from './Search.module.scss'
import close from '../../assets/images/close.svg'
import { useContext } from 'react';
import {searchContex} from '../../App'


function Search() {

    const {searchValue, setSearchValue} = useContext(searchContex)

    return (
        <div className={styles.root}>
        <input 
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input} placeholder='Поиск пиццы'/>
        {searchValue && (
            <img onClick={() => setSearchValue('')} className={styles.img} src={close} alt="Pizza logo" />
        )}
        </div>
    )
}

export default Search;