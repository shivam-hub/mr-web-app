async function GetAllReports() {
    let token = "";
    token = sessionStorage.getItem('token') ?? "";
    if (!token) {
        console.log("token")
        return [];
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Visits/getAllVisits`, {
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

        const data = await res.json();
        const users = data.map((user: any) => ({
            mrName: user.mrInfo?.name ?? '',
            doctorName: user.doctorInfo?.name ?? '',
            region: user.doctorInfo?.addressInfo?.region ?? '',
            longitude: user.location?.coordinates?.[0] ?? null,
            latitude: user.location?.coordinates?.[1] ?? null,
            visitedOn: user.visitedOn ?? null
        }));

        return users;

    } catch (error) {
        return [];
    }
}

export { GetAllReports }