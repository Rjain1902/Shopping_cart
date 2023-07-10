import React from 'react'
function Button(props) {
    return (
        <div >
           <button  
                className='border border-black-2 p-2 m-5 w-36 rounded-lg flex items-center justify-center hover:bg-green-100'
                type='submit'
                onClick={props.clickHandler}>
                    Add Item
            </button> 
        </div>
    )
}
export default Button
