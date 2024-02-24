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
    const formData = await request.formData();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Doctor/bulkAddFromExcel`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error("Failed to upload doctors");
    }

    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify([]), {
      status: 500,
    });
  }
}
