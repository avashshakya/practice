import express, { Request, Response } from "express";

const app = express();
const port = 8000;

app.get("/server-health", (_req: Request, res: Response) => {
  res.json({ value: "api is working" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
