import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const AdminContent = () => {
  return ( 
    <Card className="text-center w-[600px] ">
            <p className="text-2xl font-bold">Admin</p>
            <CardContent>
              <div className="flex flex-col gap-4">
                Your current role is <span className="font-bold">Admin</span>
                <p>You can visit admin page click on : <Link href="/admin" className="underline
                font-semibold">Admin page</Link></p>
              </div>
            </CardContent>
        </Card>
   );
}
 
export default AdminContent;