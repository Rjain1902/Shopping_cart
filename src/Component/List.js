import React from 'react'
import Item from './Item'

function List(props) {
    console.log('props',props)
    return (
        <div className='flex items-center flex-col'>
           {props.list.map((item,index)=>
            <Item 
                key={index} 
                item={item}
                remove={props.remove}
            />
           )}
            
        </div>
    )
}

export  default List