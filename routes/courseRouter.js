import express from "express";
import { course } from "../controllers/course.js";

const router= express.Router();
      router.get("/:id", function (req, res) {
   
    const { id } = req.params;
    if (id) {
      res.status(200).json({ msg: `Course with ID: ${id} Found` });
    } else {
      res.status(400).json({ msg: "Course ID Is needed" });
    }
  });

  router.get(course.getAllCourses).post(course.createCourse);
  router.get("/:id");
  router.get(course.getCourse);
  router.delete(course.deleteCourse);
  router.patch(course.updateCourse);

  export default router;
  

 





