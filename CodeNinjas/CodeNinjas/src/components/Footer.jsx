import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
return (
<footer className="bg-gray-900 text-gray-200 mt-12">
<div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<div className="text-2xl font-bold">CodingNinjas - Clone</div>
<p className="mt-2 text-sm">This is an educational clone for demonstrative purposes.</p>
</div>


<div>
<h4 className="font-semibold mb-2">Links</h4>
<ul className="space-y-1 text-sm">
<li><Link to="/">Home</Link></li>
<li><Link to="/courses">Courses</Link></li>
<li><Link to="/about">About</Link></li>
</ul>
</div>


<div>
<h4 className="font-semibold mb-2">Contact</h4>
<p className="text-sm">hello@example.com</p>
</div>
</div>
<div className="border-t border-gray-800 text-center py-4 text-xs">© {new Date().getFullYear()} Clone - for learning only</div>
</footer>
)
}