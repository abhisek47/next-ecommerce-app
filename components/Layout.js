import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name='description' content='Ecommerce Application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='flex min-h-screen flex-col justify-between'>
          <header className=' bg-slate-100'>
            <div className='container mx-auto'>
              <nav className='flex items-center justify-between p-4'>
                <div>
                  <Link href={'/'}>
                    <a className='font-bold text-2xl text-slate-800'>Amazona</a>
                  </Link>
                </div>
                <div className='flex gap-4'>
                  <Link href={'/cart'}>
                    <a className='action-button text-slate-700 hover:text-slate-50 border-2 border-slate-600 hover:border-slate-700 hover:bg-slate-800'>
                      Cart
                    </a>
                  </Link>
                  <Link href={'/login'}>
                    <a className='action-button text-slate-50 hover:bg-slate-900 bg-slate-800'>
                      Login
                    </a>
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <main className='container mx-auto p-4'>{children}</main>
          <footer className=' bg-slate-100 shadow-inner'>
            <div className='container mx-auto'>
              <div className='flex justify-center items-center p-4'>
                <p className='font-medium text-sm text-slate-500'>
                  Copyright © 2022 - Amazona
                </p>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export default Layout
