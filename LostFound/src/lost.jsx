import React from 'react'

export default function Lost() {
    const testitem = <div className='flex justify-center rounded-lg bg-gray-300 m-3 w-[150px] h-[180px]'>Test Items</div>
  return (
    <div className='flex flex-col justify-center items-center p-5'>
        <div className='flex justify-center bg-white w-[80%]'>
            <h1 className='text-blue-500 text-8xl font-bold'>Lost</h1>
        </div>
        <hr />
        <div className='flex flex-row bg-white w-[80%] min-h-[800px] my-5 rounded-lg p-5 space-x-5'>
            <div className='flex justify-center bg-gray-300 w-[20%] min-h-full'>
                Some filter
            </div>
            <hr className='h-screen w-1 bg-gray-400 border-none my-auto' />
            <div className='bg-gray-300 w-[80%] min-h-full'>
                <div className='grid grid-cols-5 bg-white p-3'>
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                    {testitem}
                </div>

            </div>
        </div>
    </div>
  )
}
