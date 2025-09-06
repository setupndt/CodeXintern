import React from 'react'
import Hero from '../components/Hero'
import CoursesGrid from '../components/CoursesGrid'
import { COURSES } from '../data/courses'


export default function Home() {
return (
<div className="space-y-8">
<Hero />


<section className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl font-semibold mb-4">Popular Courses</h2>
<CoursesGrid courses={COURSES} />
</section>


<section className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 bg-white rounded shadow">“The course helped me land a job at a top company.” — A. Kumar</div>
<div className="p-4 bg-white rounded shadow">“Mentors were amazing and the projects were practical.” — R. Singh</div>
<div className="p-4 bg-white rounded shadow">“Curriculum is updated and placement support is real.” — M. Patel</div>
</div>
</section>
</div>
)
}