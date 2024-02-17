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
        <nav className="bg-green-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/reports-workbench" className="text-white">
                    <Image
                      src="/public/nurene_logo.png"
                      alt="Logo" 
                      width={500} 
                      height={300} 
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

// import {
//     NavigationMenu,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuIndicator,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";

// export default function DefaultNavigationMenu() {
//     return (
//         <div className="relative">
//             <NavigationMenu className="absolute top-0 right-0">
//                 <NavigationMenuList className="flex space-x-4">
//                     <NavigationMenuItem>
//                         <Link href="/nurene/doctor-workbench" legacyBehavior passHref>
//                             <NavigationMenuLink>Doctors</NavigationMenuLink>
//                         </Link>
//                         <NavigationMenuIndicator />
//                     </NavigationMenuItem>
//                     <NavigationMenuItem>
//                         <Link href="/nurene/user-workbench" legacyBehavior passHref>
//                             <NavigationMenuLink>Users</NavigationMenuLink>
//                         </Link>
//                         <NavigationMenuIndicator />
//                     </NavigationMenuItem>
//                     <div className="mr-10">
//                         <NavigationMenuItem>
//                             <Link href="/nurene/reports-workbench" legacyBehavior passHref>
//                                 <NavigationMenuLink>Reports</NavigationMenuLink>
//                             </Link>
//                             <NavigationMenuIndicator />
//                         </NavigationMenuItem>
//                     </div>
//                 </NavigationMenuList>
//             </NavigationMenu>
//         </div>
//     );
// }
