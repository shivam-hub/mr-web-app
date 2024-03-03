"use client"

import React, { useEffect, useState } from "react";
import { UserCol, columns } from "./columns";
import { DataTable } from "./data-table";
import { Progress } from "@/components/ui/progress"
import { useRouter } from 'next/navigation';

const UserWorkbench = () => {
    const [data, setData] = useState<UserCol[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [progress, setProgress] = useState(10);
    const router = useRouter();
    
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
                const users = await fetch(`api/users/getUser?_=${Date.now()}`);
                if(users.status === 401){
                    router.replace('/login')
                }

                const res= await users.json();
                const user = res.map((data: any)=> ({
                    username: data?.username ?? '',
                    password: data?.password ?? '',
                    userId: data?.userId ?? '',
                    contactNo: data?.contactNo ?? '',
                    email: data?.email ?? '',
                    
                    name: data?.name ?? '',
                    reportsTo : data?.reportsTo?.name ?? '',
                    userType : data?.userType ?? '',
                    territory : data?.territory ?? '',
                })
                );
                setData(user);
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

    return (<>
      <h1 className="text-3xl font-bold ml-20 mt-10 text-emerald-900">Manage Users</h1>
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div></>
      
    );
};

export default UserWorkbench;
