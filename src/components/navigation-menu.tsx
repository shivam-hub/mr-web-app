"use client"

import Link from "next/link";
import React, { useState } from "react"
import Image from "next/image";
import { cookies } from "next/headers"; 
import { useRouter } from "next/router";


export default function NavigationMenu() {

    const cookieStore = cookies();
    const router = useRouter();
    const handleLogout = () => {
      cookieStore.delete("token");
      cookieStore.delete("user");

      router.replace("/login");
    };
  
    return (
      <>
        <nav className="bg-primary">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <div className="ml-10 mr-10 mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center">
                  <a href="/reports-workbench" className="text-white">
                    <Image
                      src="/images/logo.png"
                      alt="Logo" 
                      width={130} 
                      height={220} 
                    />
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <Link
                    href="/doctor-workbench"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Doctors
                  </Link>
                  <a
                    href="/user-workbench"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Users
                  </a>
                  <a
                    href="/reports-workbench"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Reports
                  </a>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}
