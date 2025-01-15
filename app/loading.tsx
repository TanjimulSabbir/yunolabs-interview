import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        <p className="text-xl font-semibold text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  )
}
