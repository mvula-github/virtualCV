// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Work.css"
import { WORK_XP } from '../../utilities/data'
import WorkCard from './WorkCard/WorkCard'

const Work = () => {
  return (
    <section className='xp-container'>
        <h5>Work Experience</h5>

        <div className='xp-content'>
            {WORK_XP.map((item) => (
                <WorkCard key={item.title} details={item} />
            ))}
        </div>

    </section>
  )
}

export default Work