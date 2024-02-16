"use client"

import React, { useEffect, useState } from "react";
import { UserCol, columns } from "./columns";
import { DataTable } from "./data-table";
import { Progress } from "@/components/ui/progress"

const UserWorkbench = () => {
    const [data, setData] = useState<UserCol[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
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
                const users = await fetch('api/users/getUser');
                setData(await users.json());
                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally{
                return () => {
                    clearInterval(timer);
                };
            }
        };

        fetchData();
    }, []); 

    if (!dataLoaded) {
        return <Progress value={progress} />;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default UserWorkbench;