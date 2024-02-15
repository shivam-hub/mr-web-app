"use client"

// import { GetAllUsers } from "@/api-services/Users"
// import { UserCol, columns } from "./columns"
// import { DataTable } from "./data-table"
// import React, { useEffect, useState } from "react";

// async function GetUsers(): Promise<UserCol[]> {
//     const users = await GetAllUsers();
//     return users;
// }

// function UserWorkbench() {
//     const [data, setData] = useState<UserCol[]>([]);

//     // const data = await GetUsers();
//     const data1 = JSON.parse(JSON.stringify([
//         {
//             "_id": "6583436ca1ffd18a29d39170",
//             "username": "1",
//             "password": "1",
//             "createdOn": "2023-12-20T19:41:28.549Z",
//             "userId": "167698a0-1029-460e-b660-0389b96cb55e",
//             "name": "Shivam Pandey",
//             "__v": 0
//         },
//         {
//             "_id": "659038562f20cab5eb320773",
//             "username": "testuser",
//             "password": "password",
//             "createdOn": "2023-12-30T15:33:42.029Z",
//             "contactNo": "1234567890",
//             "email": "test@gmail.com",
//             "userId": "ae84cd0d-764c-4ccf-9725-93a4abfe3295",
//             "name": "Test User 1",
//             "__v": 0
//         },
//         {
//             "_id": "659038712f20cab5eb320775",
//             "username": "suraj_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:09.256Z",
//             "contactNo": "1234567890",
//             "email": "suraj@gmail.com",
//             "userId": "4945fdc6-6058-4849-a13b-9929f07aaa49",
//             "name": "Suraj",
//             "__v": 0
//         },
//         {
//             "_id": "659038802f20cab5eb320777",
//             "username": "shivam_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:24.812Z",
//             "contactNo": "1234567890",
//             "email": "shivam@gmail.com",
//             "userId": "46f4b6cf-f1b4-4124-adf4-c04c4187354b",
//             "name": "Shivam",
//             "__v": 0
//         },
//         {
//             "_id": "659038942f20cab5eb320779",
//             "username": "jayesh_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:44.333Z",
//             "contactNo": "1234567890",
//             "email": "jayesh@gmail.com",
//             "userId": "5d66ede2-ab8e-40c6-90a0-d6b99aac8294",
//             "name": "Jayesh",
//             "__v": 0
//         },
//         {
//             "_id": "6583436ca1ffd18a29d39170",
//             "username": "1",
//             "password": "1",
//             "createdOn": "2023-12-20T19:41:28.549Z",
//             "userId": "167698a0-1029-460e-b660-0389b96cb55e",
//             "name": "Shivam Pandey",
//             "__v": 0
//         },
//         {
//             "_id": "659038562f20cab5eb320773",
//             "username": "testuser",
//             "password": "password",
//             "createdOn": "2023-12-30T15:33:42.029Z",
//             "contactNo": "1234567890",
//             "email": "test@gmail.com",
//             "userId": "ae84cd0d-764c-4ccf-9725-93a4abfe3295",
//             "name": "Test User 1",
//             "__v": 0
//         },
//         {
//             "_id": "659038712f20cab5eb320775",
//             "username": "suraj_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:09.256Z",
//             "contactNo": "1234567890",
//             "email": "suraj@gmail.com",
//             "userId": "4945fdc6-6058-4849-a13b-9929f07aaa49",
//             "name": "Suraj",
//             "__v": 0
//         },
//         {
//             "_id": "659038802f20cab5eb320777",
//             "username": "shivam_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:24.812Z",
//             "contactNo": "1234567890",
//             "email": "shivam@gmail.com",
//             "userId": "46f4b6cf-f1b4-4124-adf4-c04c4187354b",
//             "name": "Shivam",
//             "__v": 0
//         },
//         {
//             "_id": "659038942f20cab5eb320779",
//             "username": "jayesh_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:44.333Z",
//             "contactNo": "1234567890",
//             "email": "jayesh@gmail.com",
//             "userId": "5d66ede2-ab8e-40c6-90a0-d6b99aac8294",
//             "name": "Jayesh",
//             "__v": 0
//         },
//         {
//             "_id": "6583436ca1ffd18a29d39170",
//             "username": "1",
//             "password": "1",
//             "createdOn": "2023-12-20T19:41:28.549Z",
//             "userId": "167698a0-1029-460e-b660-0389b96cb55e",
//             "name": "Shivam Pandey",
//             "__v": 0
//         },
//         {
//             "_id": "659038562f20cab5eb320773",
//             "username": "testuser",
//             "password": "password",
//             "createdOn": "2023-12-30T15:33:42.029Z",
//             "contactNo": "1234567890",
//             "email": "test@gmail.com",
//             "userId": "ae84cd0d-764c-4ccf-9725-93a4abfe3295",
//             "name": "Test User 1",
//             "__v": 0
//         },
//         {
//             "_id": "659038712f20cab5eb320775",
//             "username": "suraj_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:09.256Z",
//             "contactNo": "1234567890",
//             "email": "suraj@gmail.com",
//             "userId": "4945fdc6-6058-4849-a13b-9929f07aaa49",
//             "name": "Suraj",
//             "__v": 0
//         },
//         {
//             "_id": "659038802f20cab5eb320777",
//             "username": "shivam_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:24.812Z",
//             "contactNo": "1234567890",
//             "email": "shivam@gmail.com",
//             "userId": "46f4b6cf-f1b4-4124-adf4-c04c4187354b",
//             "name": "Shivam",
//             "__v": 0
//         },
//         {
//             "_id": "659038942f20cab5eb320779",
//             "username": "jayesh_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:44.333Z",
//             "contactNo": "1234567890",
//             "email": "jayesh@gmail.com",
//             "userId": "5d66ede2-ab8e-40c6-90a0-d6b99aac8294",
//             "name": "Jayesh",
//             "__v": 0
//         },
//         {
//             "_id": "6583436ca1ffd18a29d39170",
//             "username": "1",
//             "password": "1",
//             "createdOn": "2023-12-20T19:41:28.549Z",
//             "userId": "167698a0-1029-460e-b660-0389b96cb55e",
//             "name": "Shivam Pandey",
//             "__v": 0
//         },
//         {
//             "_id": "659038562f20cab5eb320773",
//             "username": "testuser",
//             "password": "password",
//             "createdOn": "2023-12-30T15:33:42.029Z",
//             "contactNo": "1234567890",
//             "email": "test@gmail.com",
//             "userId": "ae84cd0d-764c-4ccf-9725-93a4abfe3295",
//             "name": "Test User 1",
//             "__v": 0
//         },
//         {
//             "_id": "659038712f20cab5eb320775",
//             "username": "suraj_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:09.256Z",
//             "contactNo": "1234567890",
//             "email": "suraj@gmail.com",
//             "userId": "4945fdc6-6058-4849-a13b-9929f07aaa49",
//             "name": "Suraj",
//             "__v": 0
//         },
//         {
//             "_id": "659038802f20cab5eb320777",
//             "username": "shivam_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:24.812Z",
//             "contactNo": "1234567890",
//             "email": "shivam@gmail.com",
//             "userId": "46f4b6cf-f1b4-4124-adf4-c04c4187354b",
//             "name": "Shivam",
//             "__v": 0
//         },
//         {
//             "_id": "659038942f20cab5eb320779",
//             "username": "jayesh_test",
//             "password": "password",
//             "createdOn": "2023-12-30T15:34:44.333Z",
//             "contactNo": "1234567890",
//             "email": "jayesh@gmail.com",
//             "userId": "5d66ede2-ab8e-40c6-90a0-d6b99aac8294",
//             "name": "Jayesh",
//             "__v": 0
//         },
//     ]));

//     useEffect(() => {
//         async function fetchData() {
//             const users = await GetUsers();
//             setData(users);
//         }
//         fetchData();
//     }, []);
//     // const data = JSON.parse("[]")

//     return (
//         <div className="container mx-auto py-10">
//             <DataTable columns={columns} data={data} />
//         </div>
//     )
// }

// export default UserWorkbench;


import React, { useEffect, useState } from "react";
import { GetAllUsers } from "@/api-services/Users";
import { UserCol, columns } from "./columns";
import { DataTable } from "./data-table";

// async function GetUsers(): Promise<UserCol[]> {
//     const users = await GetAllUsers();
//     return users;
// }

function UserWorkbench() {
    const [data, setData] = useState<UserCol[]>([]);

    useEffect(() => {
        async function fetchData() {
            const users = await GetAllUsers();
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
