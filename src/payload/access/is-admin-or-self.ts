import type { Access, FieldAccess } from "payload";

import { isAdmin } from "@/payload/access/is-admin";

export const isAdminOrSelf: Access = ({ req }) => {
  if (isAdmin({ req })) {
    return true;
  }

  const { user } = req;
  if (user) {
    return {
      id: { equals: user.id },
    };
  }

  return false;
};

export const isAdminOrSelfFieldLevel: FieldAccess = ({ id, req }) => {
  if (isAdmin({ req })) return true;
  if (req?.user?.id === id) return true;
  return false;
};
