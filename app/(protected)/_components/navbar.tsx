"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { useCurrentRole } from "@/hooks/user-current-role";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [currentRole, setCurrentRole] = useState<string | undefined>("");
  const pathname = usePathname();
  const role = useCurrentRole();
  const {data, update} = useSession();

  console.log(data?.user);
  

  useEffect(() => {
    update();
    if(role){
      const routeRole = role?.toLocaleLowerCase();
      setCurrentRole(routeRole);
    }
  }, [role])

  console.log(currentRole);


  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-md">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Server</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Client</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/admin" ? "default" : "outline"}
        >
          <Link href={`${currentRole === "admin" ? "/admin-content": `${currentRole}`}`}>{currentRole}</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>

      </div>


      <UserButton />
    </nav>
  );
};

export default Navbar;
