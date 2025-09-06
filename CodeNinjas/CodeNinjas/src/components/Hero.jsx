import React from 'react'


export default function Hero() {
return (
<section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
<div>
<h1 className="text-4xl font-bold mb-3">Become Industry-Ready with Practical Courses</h1>
<p className="mb-6">Live classes, expert mentors, real projects and placement support — learn the skills that top companies hire for.</p>
<div className="flex gap-3">
<button className="px-5 py-3 bg-white text-indigo-700 rounded font-semibold">Browse Courses</button>
<button className="px-5 py-3 border border-white rounded">Download Syllabus</button>
</div>
</div>


<div className="bg-white/10 p-6 rounded">
<h3 className="font-semibold mb-2">Popular Track</h3>
<div className="space-y-2">
<div className="p-3 bg-white/20 rounded">Full Stack Web Development</div>
<div className="p-3 bg-white/20 rounded">Data Structures & Algorithms</div>
<div className="p-3 bg-white/20 rounded">Machine Learning</div>
</div>
</div>
</div>
</section>
)
}