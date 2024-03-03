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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as z from "zod";
import { Separator } from "@/components/ui/separator";
import { StateComboboxForm } from "../state-combobox";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CityComboboxForm } from "../city-combobox";
import { SpecialityComboboxForm } from "../speciality-combobox";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import MedicalDetailsCard from "../medical-details-card";
import { doctor } from "@/lib/validations/doctor-model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import React from "react";

interface AddDoctorFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type FormData = z.infer<typeof doctor>;

export default function AddDoctorSheet({}: AddDoctorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(doctor) });

  const [medicalDetails, setMedicalDetails] = useState([{ id: 1 }]);
  const [file, setFile] = useState(null);

  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
  };

  const handleSelectState = (state: string) => {
    setSelectedState(state);
  };

  const handleSelectSpeciality = (speciality: string) => {
    setSelectedSpeciality(speciality);
  }

  const handleFileChange = (event: any) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleOnUploadBtnClick = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("api/excelUpload/doctor", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          return toast({
            title: "Error",
            description: "File uploaded failed",
            action: <ToastAction altText="">Ok</ToastAction>,
          });
        }

        return toast({
          title: "Success",
          description: "File uploaded succesfully",
          action: <ToastAction altText="">Ok</ToastAction>,
        });
      } catch (error) {
        return toast({
          title: "Error",
          description: "File uploaded failed",
          action: <ToastAction altText="Reupload file">Ok</ToastAction>,
        });
      }
    }
  };

  const addMedicalDetailsCard = () => {
    const newId = medicalDetails.length + 1;
    setMedicalDetails([...medicalDetails, { id: newId }]);
  };

  async function onAddBtnClicked(data: FormData) {
    setIsLoading(true);
    const doctor = {
      name: data?.name ?? '',
      regNo: data?.regNo ?? '',
      speciality: selectedSpeciality,
      addressInfo: {
        addressline1: data?.addressline1 ?? '',
        addressline2: data?.addressline2 ?? '',
        city: selectedCity ,
        state: selectedState,
        region: data?.region ?? '',
        east_west: data?.east_west ?? ''
      },
      associatedMR: {
        name : data?.associatedMR ?? ''
      }
    }

    const response = await fetch("api/doctors/addDoctor", {
      method: "POST",
      body: JSON.stringify(doctor)
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
              <SheetTitle className="text-2xl">Add new doctor</SheetTitle>
              <SheetDescription className="text-xs pt-2">
                Add the details of the doctor or upload (.xlxs) file for bulk
                add.
              </SheetDescription>
            </SheetHeader>
            <Accordion type="single" collapsible className="w-full py-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>Fill the details manually</AccordionTrigger>
                <AccordionContent>
                  {/* <p>Functionality coming up shortly! </p> */}
                  <form onSubmit={handleSubmit(onAddBtnClicked)}>
                    <div className="grid gap-4 py-5">
                      <Label htmlFor="basic" className="text-lg">
                        Basic Details
                      </Label>
                      <Separator />
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
                          id="regno"
                          className="w-80 mt-5 ml-1"
                          placeholder="Registration no."
                          {...register("regNo")}
                        />
                        {errors?.regNo && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.regNo.message}
                          </p>
                        )}
                        <SpecialityComboboxForm onSelectSpeciality={handleSelectSpeciality}/>
                        {/* <Input
                          id="clinic"
                          className="w-80 mt-5 ml-1"
                          placeholder="Clinic"
                        /> */}
                      </div>
                      <Label htmlFor="Address details" className="text-lg">
                        Address Details
                      </Label>
                      <Separator />
                      <div className="items-center gap-4 justify-between flex-col">
                        <Input
                          id="add1"
                          className="w-80 mt-5 ml-1"
                          placeholder="Address Line 1"
                          {...register("addressline1")}
                        />
                        {errors?.addressline1 && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.addressline1.message}
                          </p>
                        )}
                        <Input
                          id="add2"
                          className="w-80 mt-5 ml-1"
                          placeholder="Address Line 2"
                          {...register("addressline2")}
                        />
                        {errors?.addressline2 && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.addressline2.message}
                          </p>
                        )}
                         <CityComboboxForm onSelectCity={handleSelectCity}/>
                        <StateComboboxForm onSelectState={handleSelectState}/>
                        <Input
                          id="pincode"
                          className="w-40 my-5 ml-1"
                          placeholder="Pincode"
                          {...register("pincode")}
                        />
                        {errors?.pincode && (
                          <p className="px-1 text-xs text-red-600">
                            {errors.pincode.message}
                          </p>
                        )}
                        <Label
                          htmlFor="Associated Medical"
                          className="text-lg "
                        >
                          Associated Medical
                          <button
                            onClick={addMedicalDetailsCard}
                            className="ml-1 text-lg"
                          >
                            +
                          </button>
                        </Label>
                        <Separator className="mt-3" />
                        <div className="mt-5">
                          {medicalDetails.map((card) => (
                            <div key={card.id}>
                              <MedicalDetailsCard id={card.id} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className={cn(buttonVariants())} disabled={isLoading}>
                        Add
                      </button>
                    </div>
                  </form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Upload file</AccordionTrigger>
                <AccordionContent>
                  Please ensure following points before uploading
                  <div className="mt-5 mb-10">
                    <li>There is no duplicate records in file</li>
                    <li>The doctor entry must not be already present.</li>
                    <li>
                      Name and registeration number is present for all records{" "}
                    </li>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                    <Input
                      id="file"
                      type="file"
                      accept=".xlsx"
                      onChange={handleFileChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="my-5"
                    onClick={handleOnUploadBtnClick}
                  >
                    Upload
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
