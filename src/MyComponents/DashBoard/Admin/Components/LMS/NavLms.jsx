import React from 'react'
import { Link } from 'react-router-dom';

const NavLms = () => {
    return (
        <nav className="flex flex-col md:flex-row max-w-1366 mx-auto my-3">
            <Link to="/dashboard/admin/lms/home" className="w-56 md:w-1/4 bg-red-1 rounded-2xl p-4 text-center text-white text-lg font-bold hover:shadow-button-shadow mx-auto my-2 md:m-2">Class Mangement</Link>
            <Link to="/dashboard/admin/lms/license" className="w-56 md:w-1/4 bg-red-1 rounded-2xl p-4 text-center text-white text-lg font-bold hover:shadow-button-shadow mx-auto my-2 md:m-2">License Mangement</Link>
            <Link to="/dashboard/admin/lms/student" className="w-56 md:w-1/4 bg-red-1 rounded-2xl p-4 text-center text-white text-lg font-bold hover:shadow-button-shadow mx-auto my-2 md:m-2">Student Mangement</Link>
            <Link to="/dashboard/admin/lms/instructor" className="w-56 md:w-1/4 bg-red-1 rounded-2xl p-4 text-center text-white text-lg font-bold hover:shadow-button-shadow mx-auto my-2 md:m-2">Instructor Mangement</Link>
        </nav>
    )
}

export default NavLms;