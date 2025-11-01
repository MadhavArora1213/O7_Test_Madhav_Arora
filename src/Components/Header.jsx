import React from 'react'
// import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <div className="bg-black opacity-80 text-white h-20 px-4 flex items-center border-b-2 border-gray-300 border-rounded">
                <header>
                    <div className="flex justify-around items-center w-[98.6vw]">
                        <div className=''>
                            <h1 className="text-3xl font-bold">Mini Order App</h1>
                        </div>
                        <div className='pr-20 flex justify-between items-center w-[25vw]'>
                           <a href="order">Stationery Items</a>
                           <a href="#">Printing Items</a>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header
