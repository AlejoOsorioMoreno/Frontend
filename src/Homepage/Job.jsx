import React from 'react'
import Llamada from '../../public/img/llamada.avif'
import EquiTrabajo from '../../public/img/EquiTrabajo.avif'
import './StyleHome/Job.css'

export const Job = () => {
  return (
    <section className='container-father-job'>
        <div className="container-father-image-Job">
          <div className="container-image-Job">
              <img src={EquiTrabajo} alt="" />
          </div>
          <div className="container-image-Job">
              <img src={Llamada} alt="" />
          </div>
      </div>
      <div className="container-text-job">
        <div className="left-text-job">
          <h1 className='title-text-job'>TITLEEE JOB</h1>
          <p className='p1-text-job'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde tenetur expedita delectus dignissimos! Possimus quo dignissimos similique recusandae consectetur temporibus impedit libero nulla, incidunt sint odit perferendis magni ut?</p>
          <button className='button-job'>FUNCIONAAA?</button>
        </div>
        <div className="right.text-job">
          <p className='p2-text-job'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto mollitia vel repudiandae dolorum incidunt ex neque fugiat amet itaque, enim maxime laudantium cum magni blanditiis adipisci quo eaque eos voluptas?</p>
          <ul className='list-text-job'>
            <li className='li-text-job'>listadoo</li>
            <li className='li-text-job'>listadoo</li>
            <li className='li-text-job'>listadoo</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Job;