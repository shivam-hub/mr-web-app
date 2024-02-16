import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt"


// export async function middleware(req: NextRequest) {
//     const path = req.nextUrl.pathname;
//     const isPublicPath = path === '/login';
//     const url = req.nextUrl.clone()

//     // const token = req.cookies.get('token')?.value || '';

//     const token = await getToken({ req })
//     const isAuth = !!token

//     if (isPublicPath) {
//         if (isAuth) {
//             url.pathname = '/user_workbench'
//             return NextResponse.redirect('/user_workbench');
//         }
//         return null;
//     }

//     if (!isAuth) {
//         url.pathname = '/login'
//         return NextResponse.redirect(url);
//     }

//     return null;
// }





export function middleware(req: NextRequest){

}