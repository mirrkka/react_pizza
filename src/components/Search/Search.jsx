import styles from './Search.module.scss'
import close from '../../assets/images/close.svg'
import { useContext } from 'react';
import {searchContex} from '../../App'
import { useRef } from 'react';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { useState } from 'react';


function Search() {
    
    const [value, setValue] = useState('')
    const {setSearchValue} = useContext(searchContex)

    

    const inputRef = useRef()

    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 250), []
    )

    const onChangeInput = event => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

 

    return (
        <div className={styles.root}>
        <input 
        ref = {inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input} placeholder='Поиск пиццы'/>
        {value && (
            <img onClick={() => {onClickClear()}} className={styles.img} src={close} alt="Pizza logo" />
        )}
        </div>
    )
}

export default Search;