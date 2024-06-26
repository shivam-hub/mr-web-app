import { cookies } from "next/headers"; 

export async function GET(request : Request){
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Doctor/getAllDoctors`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            next:{
                revalidate: 60
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch doctors");
        }

        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status:200
        });
    }
    catch(err){
        return new Response(JSON.stringify([]), {
            status: 500
        })
    }
}