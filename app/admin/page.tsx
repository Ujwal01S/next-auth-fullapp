import AdminContent from "@/components/auth/adminContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import {redirect} from "next/navigation"

const AdminPage = async() => {
  
  const role = await currentRole();

  if(role !== UserRole.ADMIN){
    redirect("/settings");
    return null;
  }

  return (

    <Card className="text-center w-[600px] ">
      <p className="text-2xl font-bold">Admin Page</p>
      <CardContent className="flex flex-col">
        Your current role is <span className="font-bold underline">Admin</span>
        
        <Button variant='link' >
          <Link href="/settings">Link to: Settings page</Link>
        </Button>


        <AdminContent />
      </CardContent>
    </Card>
  );
};

export default AdminPage;
