import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname === "/" || pathname === "/all-books") {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/add-book/:path*",
        "/all-books/:path*",
        "/my-books/:path*",
        "/my-borrows/:path*",
    ],
};
