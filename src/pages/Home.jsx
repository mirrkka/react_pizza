import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import {useState, useEffect} from 'react'


function Home() {

    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch('https://62ac4effbd0e5d29af1fbb78.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setLoading(false)
      })
    },[])
    return (
        <>
        <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
          : items.map((obj) =>  <PizzaBlock key={obj.id} {...obj}/>) // spread operator 
            
        }
      </div>
      </>
    )
}

export default Home