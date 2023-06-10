import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-blue-800 md:text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/remind">Send a reminder</Link></li>
            </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl text-white">Remind Me</Link>
        </div>
        <div className="navbar-end">
            <Link href="/api/auth/login" className="btn">Sign Up / Login</Link>
        </div>
    </div>
  )
}