import { serialize } from "cookie";

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/login?_=${Date.now()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const resJson = await res.json();
  const token = resJson.token ?? "";
  let userSerialized: string = "";
  let cookieHeader: string = "";

  if (token !== "") {
    const userRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/user?_=${Date.now()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (userRes.ok) {
      const user = await userRes.json();
      console.log(user);
      if (!user.userType || user.userType.toString() === "MR") {
        return new Response(
          JSON.stringify({
            message: "Unauthorized",
          }),
          {
            status: 403,
          }
        );
      }

      userSerialized = serialize("user", user, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });
    }
  }
  else{
    return new Response('',{
        status: 401
    })
  }

  const serialized = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  cookieHeader =
    userSerialized !== "" ? [serialized, userSerialized].join(";") : serialized;

  return new Response(JSON.stringify(resJson), {
    status: 200,
    headers: { "Set-Cookie": cookieHeader },
  });
}
