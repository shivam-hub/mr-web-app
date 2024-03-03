import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value ?? "";

  if (token == "") {
    const res = {
      success: true,
      message: "User not authenticated",
    };
    return new Response(JSON.stringify(res), {
      status: 401,
    });
  }
  try {
    const payload = await request.json();
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/ScheduleVisit/bulkAdd?_=${Date.now()}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      }
    );

    if (!res.ok) {
      if (res.status === 401) {
        cookieStore.set('token', '')
        return new Response(JSON.stringify(''), {
            status: 401
        })
      } else {
        throw new Error("Failed to schedule visits");
      }
    }

    const resp = await res.json();

    return new Response(JSON.stringify(resp), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify([]), {
      status: 500,
    });
  }
}
