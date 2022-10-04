/* eslint-disable import/no-anonymous-default-export */
import Task from "../../../models/taskModel";
import dbConnect from "../../../utils/db";
import createError from "http-errors";

export default async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  await dbConnect();

  //Update task by id
  if (method === "PUT") {
    try {
      if (!id) throw createError.NotAcceptable();
      const updateTask = await Task.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res
        .status(200)
        .json({ data: updateTask, message: "Task Updated Successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }

  //Delete task by id
  if (method === "DELETE") {
    try {
      if (!id) throw createError.NotAcceptable();
      await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Task Deleted Successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }
};
