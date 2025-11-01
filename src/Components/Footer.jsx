import React from 'react'

function Footer() {
    return (
        <div>
            <div className="bg-black opacity-80 text-white h-28 px-4 flex items-center border-b-2 border-gray-300 border-rounded">
                <footer>
                    <div className="flex justify-around items-center w-[98.6vw] pt-8">
                        <div className=''>
                            <h1 className="text-3xl font-bold">Mini Order App</h1>
                        </div>
                        <div className=' flex justify-between items-center w-[70vw]'>
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Help Center</a>
                            <a href="#">FAQ</a>

                        </div>

                    </div>
                    <div className='text-center mb-4 mt-4'>
                        <h5>All rights reserved &copy; 2025</h5>
                    </div>

                </footer>

            </div>
        </div>
    )
}

export default Footer
