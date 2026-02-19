// app/api/[...path]/route.ts
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://api.localhost";

async function handler(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const pathStr = path.join("/");

  const upstream =
    pathStr === "graphql"
      ? `${API_URL}/graphql`
      : `${API_URL}/api/auth/${pathStr}`;

  console.log("[proxy]", req.method, `/${pathStr}`, "->", upstream);

  const headers = new Headers(req.headers);
  headers.delete("host");

  const sessionCookie = req.cookies.get("better-auth.session_token");
  if (sessionCookie) {
    headers.set("cookie", `better-auth.session_token=${sessionCookie.value}`);
  }

  try {
    const response = await fetch(upstream, {
      method: req.method,
      headers,
      body:
        req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
      // @ts-expect-error - duplex required for streaming body
      duplex: "half",
    });

    const resHeaders = new Headers(response.headers);
    resHeaders.delete("content-encoding");
    resHeaders.delete("transfer-encoding");

    return new NextResponse(response.body, {
      status: response.status,
      headers: resHeaders,
    });
  } catch (err) {
    console.error("[proxy] error:", err);
    return NextResponse.json({ error: "Proxy error" }, { status: 502 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
