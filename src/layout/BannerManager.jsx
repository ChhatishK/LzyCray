import React, { useRef, useState } from 'react'

const Banner = () => {
  const [image, setimage] = useState()
  const inputref = useRef(null)

  const handleclick = () => {
    inputref.current.click()
  }

  const handlechange = (event) => {
    const file = event.target.files[0]
    setimage(file)
  }

  return (
    <div className='h-120 w-230 bg-white ml-70 mt-15 rounded-xl shadow-lg flex items-center justify-between px-8'>
      <div className='flex flex-col align-middle mt-9 mb-50'>
        <h2 className='text-2xl mb-4'>Banner</h2>
        <div className='h-50 w-100 mb-4 border-2'>
        {
          image ? <img src={URL.createObjectURL(image)} alt="" className='h-50 w-100 mb-4' /> : null
        }
        </div>
        <input
          type='file'
          ref={inputref}
          onChange={handlechange}
          className='hidden'
          accept="image/*"
        />
        <button className='border-2 w-100  align-middle text-white bg-blue-600 rounded-lg ' onClick={handleclick}>Change</button>
      </div>
      <div className='flex flex-col items-end mb-90 mr-20'>
        <label htmlFor="title" className='mb-1 mr-40'>Title</label>
        <input
          type="text"
          id="title"
          placeholder='Title'
          className=' w-50 h-5 px-2 py-1 bg-gray-300 rounded-lg'
        />
      </div>

      <button   className='mb-110 mr-10 text-white bg-blue-600 w-30 rounded-2xl'>save</button>
    </div>
  )
}

export default Banner
