import {useState} from 'react'


function Categories(){

    const categories = [
        'Все',
        'Мясные',
        'Вегентарианская',
        'Гриль',
        'Острые', 
        'Закрытые'    
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
      <div className="categories">
                <ul>
                  {categories.map((value, i) => (
                      <li key = {i} onClick = {() => {onClickCategory(i)}} className={activeIndex === i ? "active" : ''}>{value}</li>
                  ))}
                </ul>
              </div>
    )
  }

  export default Categories