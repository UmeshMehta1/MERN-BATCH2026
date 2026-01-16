const { Job, User } = require("../model")



const createJob = async (req, res) => {
    const { jobTitle, jobDescription, jobLocation, jobSalary, jobCompany } = req.body
    const userId = req.user.id
    if (!jobTitle || !jobDescription || !jobLocation || !jobSalary || !jobCompany) {
        return res.status(400).json({ message: "All fields are required" })
    }
   await Job.create({
        jobTitle,
        jobDescription,
        jobLocation,
        jobSalary,
        jobCompany,
        userId
    })
    
    res.status(201).json({
        message: "job created successfully",
    })
}
// get all jobs

const getAllJobs = async (req, res)=>{

        const jobs = await Jobs.findAll({
        include: {
            model: User,
            attributes: ["id", "username", "userEmail"]
        }
    });
    if(jobs.length ===0){
        return res.status(400).json({
            message: "No jobs available"
        })
    }
    res.status(200).json({
        data: jobs
    })

    res.status(500).json({
        message: "Server error",
        error: error.message
    })
}


module.exports = {
    createJob,
    getAllJobs
}