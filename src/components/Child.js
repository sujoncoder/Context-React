import React, { useContext } from 'react'
import { myContext } from '../App'

const Child = () => {
    const [count, setCount] = useContext(myContext)

  return (
    <div className='mt-10'>
        <div className='w-[300px] h-50 mx-auto border-4 border-x-yellow-300 border-y-cyan-200 rounded-2xl shadow-xl py-2'>
            <p className='text-gray-300 text-center'>Child</p>
            <h1 className='text-center text-3xl'>{count}</h1><br /><br />

            {/* button section */}
            <div className='flex justify-evenly pb-4'>
            <button className='rounded-full bg-green-400 border-blue-200 border-2 ring-slate-400 ring-2 shadow-lg px-3 font-semibold active:bg-blue-400 py-1' onClick={() => setCount(previous => previous + 5) }>Increment</button>

            <button className='rounded-full bg-pink-400 px-3 font-semibold active:bg-red-400 py-1 border-blue-200 border-2 ring-slate-400 ring-2 shadow-lg' onClick={() => setCount(previous => previous - 2)}>Decrement</button>
            </div>

        </div>
    </div>
  )
}

export default Child