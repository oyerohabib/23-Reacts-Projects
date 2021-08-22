import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payment infrastructure for the internet</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto odit accusantium voluptatum quam! 
          Veniam deserunt asperiores tempora vero accusantium illo dolore repudiandae sit adipisci, odit officiis ipsa similique dolores atque.</p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="hero" />
        </article>
      </div>
    </section>
  )
}

export default Hero
