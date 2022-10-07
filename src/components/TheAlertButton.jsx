import React from 'react'

const TheAlertButton = () => {
    return (
        <div>

            <div Div Alert Button className="w-[90%] h-[90%] p-2 m-2 border-2 border-black mx-auto rounded-lg shadow-lg flex flex col">
                <div Div Image and Text className="
                    flex items-center 
                    max-w-sm mx-auto space-x-4 my-10 p-3 
                    bg-white 
                    rounded-xl shadow-lg border-2 border-gray-400 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ju619P92HBzG55_PnEz3xFTjCFmUwFmRyzKm_oFZTA&s" alt=""
                        className="w-12 h-12" />
                    <div Div Text>
                        <div className='text-xl font-medium text-black'>Are you sure ? </div>
                        <p className='text-slate-500'>You are about to delete post</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TheAlertButton
