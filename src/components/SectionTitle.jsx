import React from 'react'

const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-stone-300 pb-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize text-amber-50'>
                {text}
            </h2>
        </div>
    )
}

export default SectionTitle
