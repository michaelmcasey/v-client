import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

export async function GET(request: NextRequest) {
  try {
    const session = cookies().get("session")?.value;

    if (!session) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 });
    }

    // Verify the session cookie
    const decodedClaims = await adminAuth.verifySessionCookie(session, true);

    return NextResponse.json({
      isAuthenticated: true,
      user: {
        uid: decodedClaims.uid,
        email: decodedClaims.email,
        emailVerified: decodedClaims.email_verified,
        displayName: decodedClaims.name,
        photoURL: decodedClaims.picture,
      },
    });
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();
    
    if (!idToken) {
      return NextResponse.json({ error: "No ID token provided" }, { status: 400 });
    }

    // Create session cookie
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    // Set cookie
    cookies().set("session", sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Session creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
