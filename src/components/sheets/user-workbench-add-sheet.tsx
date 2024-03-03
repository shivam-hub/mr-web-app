import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupForm } from "@/components/add-user-sheet-radio";
import { useState } from "react";

export default function AddUserSheet() {
  const [selectedUserType, setSelectedUserType] = useState<string>("");


  const handleUserType = (userType: string) => {
    setSelectedUserType(userType);
    console.log(userType);
  }

  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger>
            {" "}
            <Button className="rounded-full h-7 w-17 text-xs mx-4 font-medium">
              + New
            </Button>
          </SheetTrigger>

          <SheetContent style={{ maxHeight: "100vh", overflowY: "auto" }}>
            <SheetHeader>
              <SheetTitle className="text-2xl">Add new user</SheetTitle>
              <SheetDescription className="text-xs pt-2">
                Select suitable option for adding a new user. Click Add when
                you're done.
              </SheetDescription>
            </SheetHeader>

            <Accordion type="single" collapsible className="w-full py-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>Fill the details manually</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 py-5">
                    <Label htmlFor="basic" className="text-lg">
                      Basic Details
                    </Label>

                    <Separator />

                    <RadioGroupForm onSelectUserType={handleUserType}/>
                    <div className=" items-center gap-4 justify-between flex-col">
                      <Input
                        id="name"
                        className="w-80 mt-5 ml-1"
                        placeholder="Name"
                      />

                      <Input
                        id="email"
                        className="w-80 mt-5 ml-1"
                        placeholder="Email"
                      />

                      <Input
                        id="phone"
                        className="w-80 mt-5 ml-1"
                        placeholder="Contact"
                      />
                    </div>

                    <Label htmlFor="credentials" className="text-lg">
                      Credentials
                    </Label>

                    <Separator />
                    <div className="items-center gap-4 justify-between flex-col">
                      <Input
                        id="username"
                        className="w-80 mt-5 ml-1"
                        placeholder="Username"
                      />

                      <Input
                        id="password"
                        className="w-80 mt-5 ml-1"
                        placeholder="Password"
                      />
                    </div>
                    <Button type="submit">Add</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Upload file</AccordionTrigger>
                <AccordionContent>
                  Upload your excel here.
                  <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                    <Input id="file" type="file" />
                  </div>
                  <Button type="submit">
                    Add
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <SheetFooter className="pt-5">
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
