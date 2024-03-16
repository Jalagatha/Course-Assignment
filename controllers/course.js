// import data from '../models/courses.json' assert {type: 'json'};
import {writeFile, readFile} from "fs"
import path from 'path';
import fs  from "fs";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH = `${__dirname}\\courses.json`;


async function getAllCourses(req, res){

fs.readFile(PATH, "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(JSON.parse(data));
});
  
  res.status(200).json("All Courses");
};


async function getCourse(req, res){
  const { id } = req.params;
  if (id) {
    res.status(200).json({ msg: `Course with ID: ${id} found` });
  } else {
    res.status(400).json({ msg: "Please provide Course ID!" });}};

async function updateCourse (req, res){
  res.status(200).json({ msg: "Course Updated successfully." });
};

async function createCourse(req, res){
  const Data = req.body;
  if (Data) {
    //  const DATA = {
    //   "id" : data.id,
    //   "title" : data.title,
    //   "description": data.description,
    //   "instructor" : data.instructor,
    //   "price" : data.price,
    //   "createdAt" : new Date().toISOString()
    // }
    Data.createdAt = new Date().toISOString("GMT+3");
    readFile(PATH, (error, data) => {
    if (error) {
    console.log(error);
    return;
    }
    const parsedData = JSON.parse(data);
    console.log(parsedData)
    writeFile(PATH, JSON.stringify(Data, null, 2), (err) => {
      if (err) {
        console.log('Failed to write updated data to file');
        return;
      } 
      console.log('Updated file successfully');
    });
    }
    );

  } else {
      res.status(500).json({ msg: " ID not provided?!" });
    }

  res.status(200).json({ msg: "Course created Successfully!!" });
};


async function deleteCourse (req, res) {
  res.status(200).json({ msg: "Course has been Removed" });
};

export const course = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
};
