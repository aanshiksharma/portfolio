import type { AdminDocument, PublicProfile } from "@/types";

export function toPublicProfile(admin: AdminDocument): PublicProfile {
  return {
    name: admin.name,
    email: admin.email,
    portfolioLink: admin.portfolioLink,
    resumeLink: admin.resumeLink,
    about: admin.about ?? [],

    profileImage: admin.profileImage
      ? {
          fileName: admin.profileImage.fileName,
          publicId: admin.profileImage.publicId,
          url: admin.profileImage.url,
        }
      : undefined,

    socialMediaLinks: admin.socialMediaLinks ?? [],
  };
}
