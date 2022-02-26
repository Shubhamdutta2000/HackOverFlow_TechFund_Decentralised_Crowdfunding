import React from 'react'
// components
import Navbar from 'components/Navbar'

export default function Admin({ children }) {
    return (
        <>
            <Navbar />
            {/* Header */}
            {children}
        </>
    )
}