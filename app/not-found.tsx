import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-500">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-white mb-6">Oops! The page youre looking for doesnt exist.</p>
                <Link href="/" className="px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-200">
                    Go back to Home
                </Link>
            </div>
        </div>
    )
}
