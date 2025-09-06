import React from 'react'


export default function CourseCard({ course }) {
return (
<div className="bg-white rounded shadow hover:shadow-lg transition p-4 flex flex-col">
<div className="flex-1">
<div className="text-sm text-indigo-600 font-semibold mb-1">{course.level}</div>
<h3 className="text-lg font-bold mb-2">{course.title}</h3>
<p className="text-sm text-gray-600 mb-4">{course.tagline}</p>
</div>


<div className="flex items-center justify-between mt-4">
<div className="text-sm text-gray-600">{course.duration}</div>
<div className="text-sm font-semibold">{course.price}</div>
</div>
</div>
)
}