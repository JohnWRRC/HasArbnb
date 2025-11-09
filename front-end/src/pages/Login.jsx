import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='flex items-center justify-center min-h-[80vh] '>
        <div className=' max-w-96 w-full text-center gap-4 flex flex-col '>
            <h1  className="text-3xl font-bold">Faça seu login</h1>
            <form className='flex flex-col gap-2'>
                <input  className='border border-gray-300 rounded-full px-4 py-2 w-full '
                 type="email" placeholder='Digite seu email'/>
                <input className='border border-gray-300 rounded-full px-4 py-2 w-full '
                 type="password" placeholder='Digite sua senha'/>
                <button className='bg-primary-400 font-bold text-white cursor-pointer border border-gray-300 rounded-full px-4 py-2 w-full '>
                    Login
                </button>
            </form>
            <p>Ainda não tem uma conta?{""}  <Link to='/Register' className='font-bold underline'>Registre</Link></p>

        </div>
    </section>
  )
}

export default Login

    Login
