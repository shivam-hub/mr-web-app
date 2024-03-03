import { cookies } from "next/headers"; 

export async function POST(request: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value ?? '';

    if(token == ''){
        const res = {
            success : true,
            message: 'User not authenticated'
        }
        return new Response(JSON.stringify(res), {
            status: 401
        })
    }

    try{
        const body = await request.json();
        console.log(body);

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Users/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });

        console.log(res);
        

        if (!res.ok) {
            throw new Error("Failed to add doctors");
        }

        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status:200
        });
    }
    catch(err){
        return new Response(JSON.stringify({}), {
            status: 500
        })
    }
}