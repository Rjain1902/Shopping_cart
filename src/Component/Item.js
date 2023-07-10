import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
function Item(props) {
    
    console.log(props.remove)
    const {name,price}=props.item.data
    
    //const{data}=props
    return (
        <div className='border border-black-2 p-2 rounded-md m-3 flex flex-row items-center justify-center w-[500px]'>
            <div className='flex flex-row mr-10 '>
                <div className='py-2'> Name : {name}</div>
                <div className='p-2'> Price: {price}</div>
            </div>
            <div>
                <button onClick={()=>props.remove(name)} ><DeleteIcon/></button>
            </div>
            
        </div>
    )
}

export default Item