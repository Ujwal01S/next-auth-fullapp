"use client"

import { RoleGate } from "@/components/auth/role-gate";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormSuccess } from "@/components/ui/form-success";
import { useCurrentRole } from "@/hooks/user-current-role";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";



const SettingsFooter = () => {
  const [currentRole, setCurrentRole] = useState<string | undefined>("");
  const role = useCurrentRole();
  const { update} = useSession();  

  useEffect(() => {
    update();
    if(role){
      const routeRole = role?.toLocaleLowerCase();
      setCurrentRole(routeRole);
    }
  }, [role]);

  return (
    <Card className="w-[600px]">
      <CardHeader className="text-center">
        <p className="text-sm font-semibold">Protected Route Demonstration</p>
      </CardHeader>
      <CardContent>
          <p className="text-xs text-center">Current Role: <span className="font-semibold">{currentRole?.toLocaleUpperCase()}</span></p>
          <RoleGate allowedRole= {currentRole} >
            <FormSuccess message="You are allowed to see admin page" />
            <Link href = "/admin">Goto: <span className="underline font-semibold">Admin page</span></Link>

          </RoleGate>
      </CardContent>
    </Card>
  );
};

export default SettingsFooter;
