import { serialize } from "cookie";

export async function POST(request : Request){
    const body = await request.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

    const resJson = await res.json()
    const token = resJson.token ?? '';

    const serialized = serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    });

    return new Response(JSON.stringify(resJson), {
        status: 200,
        headers : { 'Set-Cookie' : serialized}
    })
}