import React from 'react'


export default function TestimonialCard({ text, author }) {
return (
<div className="bg-white rounded shadow p-4">
<p className="italic">“{text}”</p>
<div className="mt-3 text-sm font-semibold">{author}</div>
</div>
)
}