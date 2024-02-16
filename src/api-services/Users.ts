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
            },
            next:{
                revalidate: 60
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