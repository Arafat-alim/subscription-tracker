import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Get All Users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get All User details" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "Create new User" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update new User" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete the  User" });
});

export default userRouter;
