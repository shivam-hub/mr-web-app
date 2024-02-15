// import { cookies } from 'next/headers'

// const cookieStore = cookies();

// function getToken(){
//     if(cookieStore.has('token')){
//         const token = cookieStore.get('token')?.value;

//         if(token && token !== ''){
//             return token;
//         }
//         return '';
//     }
// }



// async function GetAllUsers(){
//     var token = ""
//     if(typeof window !== 'undefined')
//         token = sessionStorage.getItem('token')

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Users/getAllUser`, {
//         method : "GET",
//         headers : {
//             "Authorization" : `Bearer ${token}`
//         },
//         next : {
//             revalidate: 30
//         }
//     })

//     if(!res?.ok){
//         return null
//     }
//     const users = await res.json();
//     return users;
// }

async function GetAllUsers() {
    let token = "";

    token = sessionStorage.getItem('token') ?? "";


    if (!token) {
        console.log("token")
        return [];
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Users/getAllUser`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await res.json();
        return users;
    } catch (error) {
        return [];
    }
}

export { GetAllUsers }