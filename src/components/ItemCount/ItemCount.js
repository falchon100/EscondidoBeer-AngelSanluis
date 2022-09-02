import React from 'react'
import '../../style/itemCount/ItemCount.css'
import { useState } from 'react';

const ItemCount = () => {
  const stock = 10;
  const [items, setitems] = useState(0)
  const onRemove = ()=>{ items > 0 ?  setitems(items-1) : alert('no tengo items')

  }
  const onAdd= ()=>{
 items<stock ? setitems(items+1):alert('ya tiene el maximo de items')
  }

  return (
    
    <div >ItemCount
     <div className='ItemCount'> 
       <button onClick={onRemove} className='ItemCount_Button'>-</button>
       <p className='ItemCount_p'>{items}</p>
       <button onClick={onAdd} className='ItemCount_Button'>+</button>
    </div>
    <div>
    <p className='ItemCount_p'>Stock Disponible : {stock-items}</p>
    </div>
    </div>
  )
}

export default ItemCount