import React from 'react'


export default function About() {
return (
<div className="max-w-4xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-4">About (CodingNinjas Clone)</h1>
<p className="mb-4">This is a UI clone intended for learning — it is not affiliated with Coding Ninjas. The clone replicates the layout, components and styling patterns.</p>


<h2 className="text-xl font-semibold mb-2">What this project includes</h2>
<ul className="list-disc pl-5 space-y-1">
<li>Header / Navigation</li>
<li>Hero with call-to-action</li>
<li>Courses grid and cards</li>
<li>Responsive layout (mobile-first) using Tailwind</li>
</ul>
</div>
)
}