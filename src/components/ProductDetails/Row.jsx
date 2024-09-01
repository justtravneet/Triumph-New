import React from 'react'

export default function Row({heading,data}) {
    return (
        <div className='grid grid-cols-12 mx-4 mb-2'>
            <div className='col-span-4 text-gray-500'>
                {heading} :
            </div>
            <div className='col-span-8'>
                {data}
            </div>
        </div>
    )
}
