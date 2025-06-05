import React from 'react'

const SkillsCard = ({ icon, title, text }) => {
    return (
        <article>
            <span className='flex justify-center items-center'>{icon}</span>
            <h4 className='mt-6 font-bold text-amber-50 text-center'>{title}</h4>
            <p className='mt-2 text-stone-400 text-center'>{text}</p>
        </article>
    )
}

export default SkillsCard
