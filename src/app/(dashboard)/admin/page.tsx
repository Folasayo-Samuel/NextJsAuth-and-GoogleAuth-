import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Page(){
    const session = await getServerSession(authOptions);
    console.log(session);

    if(session?.user){
        return <h2 className="text-2xl">Admin Page - Welcome Back { session?.user.username || session.user.name}</h2>
    }

    return <h2 className="text-2xl">Please login to see this admin page.</h2>
}