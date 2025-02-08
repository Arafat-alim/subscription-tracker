import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get All Subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get subscription details" })
);
subscriptionRouter.post("/:id", (req, res) =>
  res.send({ title: "Create subscription" })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update Subscriptions" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete Subscriptions" })
);
subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "Get all user Subscriptions" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel Subscriptions" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "Get upcoming Renewal Subscriptions" })
);

export default subscriptionRouter;
