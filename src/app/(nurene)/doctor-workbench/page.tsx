"use client";

import React, { useEffect, useState } from "react";
import { DoctorCol, columns } from "./columns";
import { DataTable } from "./data-table";
import { Progress } from "@/components/ui/progress";

const UserWorkbench = () => {
  const [data, setData] = useState<DoctorCol[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [progress, setProgress] = useState(10);

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
        const response = await fetch("api/doctors/getDoctor");
        const res = await response.json();
        
        const doctors = res.map((doctor: any) => ({
            drId : doctor?.drId ?? '',
            name: doctor?.name ?? '',
            addressLine1:  doctor?.addressInfo?.addressline1 ?? '',
            addressLine2:  doctor?.addressInfo?.addressline2 ?? '',
            region: doctor?.addressInfo?.region ?? '',
            city: doctor?.addressInfo?.city ?? '',
            east_west:  doctor?.addressInfo?.east_west ?? '',
            regNo: doctor?.regNo ?? '',
            clinicName: doctor?.clinicName ?? '',
            speciality: doctor?.speciality ?? '',
            associatedMRName: doctor?.associatedMR?.name ?? '',
            associatedMRId: doctor?.associatedMR?.id ?? ''
        }));

        setData(doctors);
        setDataLoaded(true);
      } catch (error) {
      } finally {
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
      <h1 className="text-3xl font-bold ml-20 mt-10 text-emerald-900">
        Manage Doctors
      </h1>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default UserWorkbench;
