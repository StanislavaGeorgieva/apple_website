import React from 'react'


const Footer = () => {
  return (
<footer className='py-5 sm:px-10 px-5 '>
<div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs text-center">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            other retailer
            </span>{' '}
            near you.
            <span> {' '}  Or call 000800-040-1966 {' '}</span>
            <span>{' '} Copright @ 2024 Apple Inc. All rights reserved. {' '}</span>
          </p>
         
           
        
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        

    </div>
</footer>
  )
}

export default Footer
