import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languages } from './local/listLang';
import { verifyJWT } from './helpers/jwt/jwtVerify';


interface AuthenticatedRequest extends NextRequest {
    user: {
        id: string;
    };
}

export async function middleware(request: NextRequest) {


    let token: string | undefined;
    if (request.cookies.has("token")) {
        token = request.cookies.get("token")?.value;
    } else if (request.headers.get("Authorization")?.startsWith("Bearer")) {
        token = request.headers.get("Authorization")?.substring(7);
    }


    const response = NextResponse.next();
    const pathName = request.nextUrl.pathname
    const safePath = new RegExp("^/$|^/files/|^/favicon.ico$|^/api|^/logo.png$|^/robots.txt$|^/auth$")

    if (safePath.test(pathName)) {
        return response
    }
    else {
        const listPath = pathName.split("/")
        if (languages.includes(listPath[1])) {
            return response
        }

        if (listPath[1].toLowerCase() == "adminpanel") {
            try {

                if (token) {
                    const { sub } = await verifyJWT<{ sub: string }>(token);
                    response.headers.set("X-USER-ID", sub);
                    (request as AuthenticatedRequest).user = { id: sub };
                }
                else {
                    return NextResponse.redirect(
                        new URL(`/auth`, request.url)
                    );
                }
            } catch (error) {
                return NextResponse.redirect(
                    new URL(`/auth`, request.url)
                );
            }
        }


    }
}











// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/:lang/',
        '/adminPanel/:path/',

    ],

}
