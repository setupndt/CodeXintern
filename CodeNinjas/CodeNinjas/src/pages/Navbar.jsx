import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
return (
<header className="bg-white shadow">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center font-bold">CN</div>
<div className="font-semibold">CodingNinjas - Clone</div>
</div>


<nav className="hidden md:flex gap-4 items-center">
<NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>Home</NavLink>
<NavLink to="/courses" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>Courses</NavLink>
<NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>About</NavLink>
<button className="ml-4 px-4 py-1 bg-indigo-600 text-white rounded">Apply</button>
</nav>


<div className="md:hidden">
{/* Mobile menu placeholder - for brevity use a simple button */}
<button className="px-3 py-1 border rounded">Menu</button>
</div>
</div>
</header>
)
}