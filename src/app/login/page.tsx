import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



function Login() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Card className="w-80 mx-auto md:w-96 lg:w-104 max-h-96 p-8 bg-white rounded shadow-md">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle className="font-bold text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent >
                    <form action="">
                    <Input type="text" placeholder="Username" className="my-5 "/>
                    <Input type="password" placeholder="Password" className="my-2 " />

                    </form>
                </CardContent>
                <CardFooter className="flex justify-center ">
                <Button>Log in</Button>
 
                </CardFooter>
            </Card>
        </div>


    )
}

export default Login;