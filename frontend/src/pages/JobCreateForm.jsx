import React from 'react'

const JobCreateForm = () => {
     

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow">
    <h2 className="text-2xl font-bold mb-6 text-center">Create Job</h2>
    <form className="space-y-4">
      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Job Title</label>
        <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Frontend Developer" />
      </div>
      {/* Company */}
      <div>
        <label className="block text-sm font-medium mb-1">Company Name</label>
        <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="ABC Pvt. Ltd." />
      </div>
      {/* Job Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Job Description</label>
        <textarea rows={4} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Describe job role..." defaultValue={""} />
      </div>
      {/* Location */}
      <div>
        <label className="block text-sm font-medium mb-1">Job Location</label>
        <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Kathmandu" />
      </div>
      {/* Salary */}
      <div>
        <label className="block text-sm font-medium mb-1">Salary</label>
        <input type="number" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder={80000} />
      </div>
      {/* Submit */}
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
        Create Job
      </button>
    </form>
  </div>
</div>


  )
}

export default JobCreateForm
