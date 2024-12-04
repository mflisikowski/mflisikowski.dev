import type { Access } from "payload";
import type { FieldAccess } from "payload";

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (user) {
    if (user.roles?.includes("admin")) {
      return true;
    }

    return {
      id: { equals: user.id },
    };
  }

  return false;
};

export const isAdminOrSelfFieldLevel: FieldAccess = ({ id, req: { user } }) => {
  if (user?.roles?.includes("admin")) return true;
  if (user?.id === id) return true;
  return false;
};
