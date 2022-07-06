import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import {useState, useEffect} from 'react'
import Pagination from '../components/Pagination/Pagination'
import {searchContex} from '../App'
import { useContext } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setCategoryId} from '../redux/slices/filterSlice'


function Home() {

    const categoryId = useSelector((state) => state.filter.categoryId)
    const dispatch = useDispatch()
    const sortType = useSelector((state) => state.filter.sort.sortProperty)

    const {searchValue} = useContext(searchContex)
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))

    }


    const pizzas = items.map((obj) =>  <PizzaBlock key={obj.id} {...obj}/>)
  
    useEffect(() => {
      setLoading(true)

      const category = categoryId > 0 ? `category=${categoryId}`: ''
      const sortBy = sortType
      const search = searchValue ? `&search=${searchValue}`: ''

      fetch(`https://62ac4effbd0e5d29af1fbb78.mockapi.io/items?&page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=desk${search}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setLoading(false)
      })
      window.scrollTo(0, 0)
    },[categoryId, sortType, searchValue, currentPage])


    return (
        <div className="container">
        <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory}/>
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
          : pizzas // spread operator 
            
        }
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
      </div>


      
    )
}

export default Home