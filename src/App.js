import { useState } from "react";
import Button from "./Component/Button";
import Form from "./Component/Form";
import List from "./Component/List";
function App() {
  const [display,setDisplay]=useState(true)
  const[arrList,setNewList]=useState([])
  const onClickHandler=()=>{
    setDisplay(!display)
  }
  const submitHandler=(e,name,price)=>{
    e.preventDefault()
    let data={
      name,
      price
    }
    let arr=[...arrList,{data}]
    setNewList(arr)
    setDisplay(!display)
  }
  const removeHandler=(name)=>{
    console.log('remove function')
    let arr=arrList.filter((item)=>item.data.name!==name)
    console.log('new arr',arr)
    setNewList(arr)
  }
  return (
    <div className='text-lg flex items-center justify-center flex-col'>
      <span className="mt-20  mb-0 border border-black-4 p-3  rounded-md bg-blue-500 text-white">Shopping Cart App</span>
      {display && <Button clickHandler={onClickHandler}/>}
      {display && <List list={arrList} remove={removeHandler}/>}
      {!display&& <Form submit={submitHandler}/>}
    </div>
  );
}
export default App;
