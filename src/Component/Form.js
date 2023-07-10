import React, { useState } from 'react'
function Form(props) {
    const[name,setName]=useState()
    const [price,setPrice]=useState()
    let styling='border border-black-2 m-3 p-2 rounded-lg'
    return (
        <div className='mt-16 border border-black-3 h-[300px] flex items-center flex-col justify-center bg-orange-400'>
            <h4 className='text-white'>Enter Details</h4>
            <form 
                onSubmit={(e)=>props.submit(e,name,price)} 
                className='flex flex-col items-center'
            >
                <input 
                    className={styling} 
                    type='text'
                    value={name}
                    placeholder='Name Of Item'
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <input 
                    className={styling} 
                    type='number'
                    value={price}
                    placeholder='Price'
                    onChange={(e)=>{setPrice(e.target.value)}}
                    onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault()}
                />
                <button className='border border-black-2 p-2 text-white'>Add Item</button>
            </form>
        </div>
    )
}
export default Form
