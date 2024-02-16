async function GetAllDoctors() {
    let token = "";
    token = sessionStorage.getItem('token') ?? "";
    if (!token) {
        console.log("token")
        return [];
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Doctor/getAllDoctors`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            next:{
                revalidate: 60
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch doctors");
        }
        const data = await res.json();
        const doctors = data.map((doctor: any) => ({
            doctorName: doctor?.name ?? '',
            region: doctor?.addressInfo?.region ?? '',
            regNo: doctor?.regNo ?? '',
            clinicName: doctor?.clinicName ?? '',
            speciality: doctor?.speciality ?? ''
        }));

        return doctors;

    } catch (error) {
        return [];
    }
}

export { GetAllDoctors }