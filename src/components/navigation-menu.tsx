"use client"

import Link from "next/link";
import React, { useState } from "react"
import Image from "next/image";
export default function NavigationMenu() {
    // const [isClick, setIsClick] = useState(false);

    // const toggleNavBar = (): void => {
    //     setIsClick(!isClick);

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
                      src="/images/logo_sm.png"
                      alt="Logo" 
                      width={50} 
                      height={80} 
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
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}
