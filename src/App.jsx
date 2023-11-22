import React from 'react'
import MyForm from './Form/MyForm'

function App() {
  return (
    <div className='flex justify-center p-5'>
      <div className="content w-[500px] rounded-md border-2 border-black p-3 bg-white shadow">
        <div className="content-header">
          <h1 className='text-center font-semibold text-lg'>My Form App</h1>
        </div>
        <div className="conten-body">
          <MyForm/>
        </div>
      </div>
    </div>
  )
}

export default App