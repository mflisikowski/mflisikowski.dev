import type { Access, FieldAccess } from "payload";
import type { User } from "payload";

const hasAdminRole = (user: User | null): boolean => Boolean(user?.roles?.includes("admin"));

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => hasAdminRole(user);

export const isAdmin: Access = ({ req: { user } }) => hasAdminRole(user);
