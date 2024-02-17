"use client"

import React, { useEffect, useState } from "react";
import { GetAllReports } from "@/api-services/Reports";
import { ReportsCol, columns } from "./columns";
import { DataTable } from "./data-table";
import { Progress } from "@/components/ui/progress";


const UserWorkbench = () => {
    const [data, setData] = useState<ReportsCol[]>([]);
    const [progress, setProgress] = useState(10);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {

            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 10;
                    if (newProgress >= 100) {
                        clearInterval(timer);
                    }
                    return newProgress;
                });
            }, 500);
            try {
                const users = await fetch('api/reports/getReports');
                setData(await users.json());
                setDataLoaded(true);              
            } catch (error) {
                
            }
            finally{
                return () => {
                    clearInterval(timer);
                };
            }
        }
        fetchData();
    }, []);

    if (!dataLoaded) {
        return <Progress value={progress} />;
    }
    
    return (

        <>
        <h1 className="text-3xl font-bold ml-20 mt-10 text-emerald-900">Reports</h1>
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div> </>
    );
}

export default UserWorkbench;
