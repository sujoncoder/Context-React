import React, { useContext } from 'react'
import { myContext } from '../App'
import Child from './Child'

const Parents = () => {
    const [count, setCount] = useContext(myContext)
  return (
    <div>
        <div className='w-[300px] h-50 mx-auto border-4 border-x-cyan-300 border-y-green-200 rounded-2xl shadow-xl py-2 mt-10'>
            <p className='text-gray-300 text-center'>Parents</p> <br />
            <h1 className='text-center text-4xl'>{count}</h1><br /><br />
        </div>

        <div>
            <Child count={count} setCount={setCount}/>
        </div>
    </div>
  )
}

export default Parents