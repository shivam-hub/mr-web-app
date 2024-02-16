import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//     const path = req.nextUrl.pathname;
//     const token = req.cookies.get('token')?.value || '';
//     const isPublicPath = path === '/login';
//     const url = req.nextUrl.clone()

//     if(isPublicPath){
//         if (token !== '') {
//             url.pathname = '/user-workbench'
//         }
//         else{
//             url.pathname = '/login'
//         }
//         return NextResponse.redirect(url);
//     }
//     if (token === '') {
//         url.pathname = '/login'
//         return NextResponse.redirect(url);
//     }

//     return NextResponse.next();
// }

// import { NextRequest, NextResponse } from "next/server";

// import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get('token')?.value || '';
    const isPublicPath = path === '/login';
    const isWorkbenchPath = path === '/user-workbench' || path === '/doctor-workbench' || path === '/reports-workbench';
    const url = req.nextUrl.clone();

    if (isPublicPath && token !== '') {
        url.pathname = '/user-workbench';
        return NextResponse.redirect(url);
    }

    if (isWorkbenchPath && token === '') {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/user-workbench', '/doctor-workbench', '/reports-workbench'],
};
