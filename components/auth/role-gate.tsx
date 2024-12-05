"use client";

import { FormError } from "../form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole:string | undefined
}

export const RoleGate = ({ allowedRole, children }: RoleGateProps) => {
  if (allowedRole !== "admin") {
    return (
      <FormError message="You do not have permission to admin page" />
    );
  }

  return <>{children}</>;
};
