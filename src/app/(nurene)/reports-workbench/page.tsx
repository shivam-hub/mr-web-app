"use client"

import React, { useEffect, useState } from "react";
import { GetAllReports } from "@/api-services/Reports";
import { ReportsCol, columns } from "./columns";
import { DataTable } from "./data-table";


const UserWorkbench = () => {
    const [data, setData] = useState<ReportsCol[]>([]);

    useEffect(() => {
        async function fetchData() {
            const users = await GetAllReports();
            setData(users);
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
