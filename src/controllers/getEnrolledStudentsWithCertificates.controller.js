import User from "../models/user.models.js";
import CourseEnrolled from "../models/courseEnrolled.models.js";
import Certificate from "../models/certificate.models.js";
import Course from "../models/course.models.js";
import mongoose, { get } from "mongoose";

const getEnrolledStudentsWithCertificate = async (req, res) => {
    try {
        // Step 1: Get all enrollments
        const enrollments = await CourseEnrolled.find(); // [{studentid, courseid}, ...]

        // Step 2: Extract unique student IDs
        const studentIds = [...new Set(enrollments.map(e => e.studentid.toString()))].map(id => new mongoose.Types.ObjectId(id));

        // Step 3: Fetch student and course info
        const students = await User.find({ _id: { $in: studentIds } });
        const courseIds = [...new Set(enrollments.map(e => e.courseid.toString()))].map(id => new mongoose.Types.ObjectId(id));
        const courses = await Course.find({ _id: { $in: courseIds } });

        // Step 4: Fetch certificates issued
        const certificates = await Certificate.find({
            studentid: { $in: studentIds }
        });

        // Step 5: Build flat combined data
        const combinedData = [];

        enrollments.forEach(enrollment => {
            const student = students.find(s => s._id.toString() === enrollment.studentid.toString());
            const course = courses.find(c => c._id.toString() === enrollment.courseid.toString());
            const cert = certificates.find(c =>
                c.studentid.toString() === enrollment.studentid.toString() &&
                c.courseid.toString() === enrollment.courseid.toString()
            );

            if (student && course) {
                combinedData.push({
                    username: student.username,
                    fullname: `${student.firstname} ${student.middlename || ""} ${student.lastname}`.trim(),
                    email: student.email,
                    phone: student.phone,
                    courseEnrolled: course.title,
                    issuedCertificate: cert ? cert.certificateurl : "Not Issued"
                });
            }
        });

        // return combinedData;
        return res.status(200).json({
            status: 200,
            data: combinedData
        })

    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            status: "500",
            msg: "Error fetching enrolled students with certificates"
        });
    }
};


export default getEnrolledStudentsWithCertificate