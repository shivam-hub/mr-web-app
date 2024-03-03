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
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupForm } from "@/components/add-user-sheet-radio";
import { PersonComboboxForm } from "../reports-to-combobox";
import z from "zod/lib";
import { user } from "@/lib/validations/user-model";


interface AddUserFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type FormData = z.infer<typeof user>;


export default function AddUserSheet({}: AddUserFormProps) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(user) });


  const [selectedPerson, setSelectedPerson] = useState<string>("");

  const handleSelectPerson = (person: string) => {
    setSelectedPerson(person);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  const [selectedUserType, setSelectedUserType] = useState<string>("");


  const handleUserType = (userType: string) => {
    setSelectedUserType(userType);
    console.log(userType);
  }

  async function onAddBtnClicked(data: FormData) {
    setIsLoading(true);
    const user = {
      username: data?.username ?? '',
      password: data?.password ?? '',
      
      contactNo: data?.contactNo ?? '',
      email: data?.email ?? '',
      
      name: data?.name ?? '',
      reportsTo : selectedPerson,
      userType : selectedUserType,
      territory : data?.territory ?? '',
    }

    const response = await fetch("api/users/addUser", {
      method: "POST",
      body: JSON.stringify(user)
    })

    setIsLoading(false);
    console.log(response);
    

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
                  <form onSubmit={handleSubmit(onAddBtnClicked)}>
                    <div className="grid gap-4 py-5">
                      <Label htmlFor="basic" className="text-lg">
                        Basic Details
                      </Label>

                      <Separator />

                      <RadioGroupForm onSelectUserType={handleUserType} />
                      <div className=" items-center gap-4 justify-between flex-col">
                        <Input
                          id="name"
                          className="w-80 mt-5 ml-1"
                          placeholder="Name"
                          {...register("name")}
                        />
                        {errors?.name && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.name.message}
                          </p>
                        )}

                        <Input
                          id="email"
                          className="w-80 mt-5 ml-1"
                          placeholder="Email"
                          {...register("email")}
                        />

                        {errors?.email && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.email.message}
                          </p>
                        )}

                        <Input
                          id="phone"
                          className="w-80 mt-5 ml-1"
                          placeholder="Contact"
                          {...register("contactNo")}
                        />

                        {errors?.contactNo && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.contactNo.message}
                          </p>
                        )}
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
                          {...register("username")}
                        />
                        {errors?.username && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.username.message}
                          </p>
                        )}
                        <Input
                          id="password"
                          className="w-80 mt-5 ml-1"
                          placeholder="Password"
                          {...register("password")}
                        />
                        {errors?.password && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.password.message}
                          </p>
                        )}
                      </div>

                      <Label htmlFor="credentials" className="text-lg">
                        Other details
                      </Label>

                      <Separator />
                      <div className="items-center gap-4 justify-between flex-col">
                        <Input
                          id="territory"
                          className="w-80 mt-5 ml-1"
                          placeholder="Territory"
                          {...register("territory")}
                        />
                        {errors?.territory && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.territory.message}
                          </p>
                        )}
                        <PersonComboboxForm
                          onSelectPerson={handleSelectPerson}
                        />
                      </div>
                      <Button
                        type="submit"
                        className={cn(buttonVariants())}
                        style={{ margin: "10px", width: "70px" }}
                        disabled={isLoading}
                      >
                        Add
                      </Button>
                    </div>
                  </form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Upload file</AccordionTrigger>
                <AccordionContent>
                  Upload your excel here.
                  <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                    <Input id="file" type="file" />
                  </div>
                  <button
                    type="submit"
                    className={cn(buttonVariants())}
                    style={{ margin: "10px", width: "70px" }}
                    disabled={isLoading}
                  >
                    Add
                  </button>
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
