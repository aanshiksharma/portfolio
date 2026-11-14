import Admin from "@/models/Admin";
import { connectDB } from "../mongodb";
import { serialize } from "../serialize";

export const getProfile = async () => {
  await connectDB();

  const admin = await Admin.findOne().select("-password").lean();

  return serialize(admin);
};
