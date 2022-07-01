import {useState} from 'react'


function Categories({value, onClickCategory}){
  
    const categories = [
        'Все',
        'Мясные',
        'Вегентарианская',
        'Гриль',
        'Острые', 
        'Закрытые'    
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    // const onClickCategory = (index) => {
    //     setActiveIndex(index)
    // }
    return (
      <div className="categories">
                <ul>
                  {categories.map((categoryName, i) => (
                      <li key = {i} onClick = {() => {onClickCategory(i)}} className={value === i ? "active" : ''}>{categoryName}</li>
                  ))}
                </ul>
              </div>
    )
  }

  export default Categories