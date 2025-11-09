import React from 'react'
import Itens from '../components/Itens'

function home() {
  return (
    <section>
        <div className=' grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] max-w-7xl p-8 gap-8'>
            <Itens/>
            <Itens/>
            <Itens/>
            <Itens/>
            <Itens/>
            <Itens/>
            <Itens/>
            <Itens/>
        </div>
    </section>
  )
}

export default home

