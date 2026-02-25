"use server";

import { prisma } from "@/lib/prisma";
import type { Lead } from "@prisma/client";

export async function getLeads(): Promise<Lead[]> {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return leads;
  } catch (error) {
    console.error("Database Fetch Error:", error);
    return [];
  }
}