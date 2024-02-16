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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Visits/getAllVisits`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            next:{
                revalidate: 60
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch reports");
        }

        const data = await res.json();

        const visits = data.map((user: any) => ({
            mrName: user.mrInfo?.name ?? '',
            doctorName: user.doctorInfo?.name ?? '',
            region: user.doctorInfo?.addressInfo?.region ?? '',
            longitude: user.location?.coordinates?.[0] ?? null,
            latitude: user.location?.coordinates?.[1] ?? null,
            visitedOn: user.visitedOn ?? null
        }));

        return new Response(JSON.stringify(visits), {
            status:200
        });
    }
    catch(err){
        return new Response(JSON.stringify([]), {
            status: 500
        })
    }
}