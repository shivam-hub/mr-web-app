"use client"

import React, { useEffect, useState } from "react";
import { GetAllDoctors } from "@/api-services/Doctors";
import { DoctorCol, columns } from "./columns";
import { DataTable } from "./data-table";


const UserWorkbench = () => {
    const [data, setData] = useState<DoctorCol[]>([]);

    useEffect(() => {
        async function fetchData() {
            const doctors = await GetAllDoctors();
            setData(doctors);
        }
        fetchData();
    }, []);
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default UserWorkbench;
