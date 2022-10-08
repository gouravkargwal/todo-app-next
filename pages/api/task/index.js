/* eslint-disable import/no-anonymous-default-export */
import Task from "../../../models/taskModel";
import dbConnect from "../../../utils/db";
import createError from "http-errors";

export default async (req, res) => {
  const { method } = req;
  await dbConnect();

  //Post Route
  if (method === "POST") {
    try {
      if (!req.body) throw createError.NotAcceptable();
      const newTask = await new Task(req.body).save();
      res
        .status(200)
        .json({ data: newTask, message: "Task Added Successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //Get Route
  if (method === "GET") {
    try {
      const tasks = await Task.find();
      res.status(200).json({ data: tasks });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
