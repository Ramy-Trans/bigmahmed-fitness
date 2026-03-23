import { Router, type IRouter } from "express";
import { db, insertLeadSchema, leadsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  const result = insertLeadSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.error.message });
    return;
  }

  const [lead] = await db.insert(leadsTable).values(result.data).returning();
  res.status(201).json(lead);
});

router.get("/leads", async (_req, res) => {
  const leads = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));
  res.json(leads);
});

export default router;
