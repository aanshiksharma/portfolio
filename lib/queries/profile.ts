import { cache } from "react";

import Admin from "@/models/Admin";
import { connectDB } from "../mongodb";
import { toPublicProfile } from "../mappers/profile.mapper";
import type { AdminDocument, PublicProfile } from "@/types";

export const getProfile = cache(async (): Promise<PublicProfile | null> => {
  await connectDB();

  const admin = await Admin.findOne().select("-password").lean<AdminDocument>();

  if (!admin) return null;

  return toPublicProfile(admin);
});
