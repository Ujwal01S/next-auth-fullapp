import { Card, CardContent } from "@/components/ui/card";


const UserPage = () => {
    return ( 
        <Card className="text-center w-[600px] ">
            <p className="text-2xl font-bold">User Page</p>
            <CardContent>
                Your current role is <span className="font-bold underline">user</span>
            </CardContent>
        </Card>
     );
}
 
export default UserPage;