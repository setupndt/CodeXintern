import React from 'react'
import CoursesGrid from '../components/CoursesGrid'
import { COURSES } from '../data/courses'


export default function Courses() {
return (
<div className="max-w-6xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-6">All Courses</h1>
<CoursesGrid courses={COURSES} />
</div>
)
}