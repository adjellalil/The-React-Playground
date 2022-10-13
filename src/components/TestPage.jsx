import React from 'react'

const TestPage = () => {
    return (
        <div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">

                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={} alt="" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                
                        <div className="flex-1">
                            <p className="text-sm font-medium text-indigo-600">
                                <a className="hover:underline">
                                    Category Name
                                </a>
                            </p>

                            <a href={post.href} className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">Title</p>
                                <p className="mt-3 text-base text-gray-500">Description</p>
                            </a>

                        </div>

                
                    </div>
                
                </div>
            
            </div>
        
        </div>

    )
}

export default TestPage
