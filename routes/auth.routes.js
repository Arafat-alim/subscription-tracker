import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "SignUp" });
});

authRouter.get("/sign-in", (req, res) => {
  res.send({ title: "Sign in" });
});

authRouter.get("/sign-out", (req, res) => {
  res.send({ title: "Sign out" });
});

export default authRouter;
