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

import { Separator } from "@/components/ui/separator";
import { StateComboboxForm } from "../state-combobox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CityComboboxForm } from "../city-combobox";
import { CategoryComboboxForm } from "../category-combobox";
import { ToastAction } from "@/components/ui/toast";
import { toast, useToast } from "@/components/ui/use-toast";

export default function AddDoctorSheet() {
  const [medicalDetails, setMedicalDetails] = useState([{ id: 1 }]);

  const [file, setFile] = useState(null);

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
                  <p>Functionality coming up shortly! </p>
                  {/*  <div className="grid gap-4 py-5">
                    <Label htmlFor="basic" className="text-lg">
                      Basic Details
                    </Label>
                    <Separator />
                    <div className=" items-center gap-4 justify-between flex-col">
                      <Input
                        id="name"
                        className="w-70 mt-5 ml-1"
                        placeholder="Name"
                      />
                      <Input
                        id="regno"
                        className="w-70 mt-5 ml-1"
                        placeholder="Registration no."
                      />
                      <CategoryComboboxForm />
                      <Input
                        id="clinic"
                        className="w-70 mt-5 ml-1"
                        placeholder="Clinic"
                      />
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
                      />

                      <Input
                        id="add2"
                        className="w-80 mt-5 ml-1"
                        placeholder="Address Line 2"
                      />
                      <CityComboboxForm />
                      <StateComboboxForm />
                      <Input
                        id="pincode"
                        className="w-40 my-5 ml-1"
                        placeholder="Pincode"
                      /> */}

                  {/* <Label
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
                        </div> */}
                  {/* </div>
                  </div>
                  <div>
                    <Button type="submit">Add</Button>
                  </div> */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Upload file</AccordionTrigger>
                <AccordionContent>
                  Please ensure following points before uploading
                  <div className="mt-5 mb-10">
                  <li>There is no duplicate records in file</li>
                  <li>The doctor entry must not be already present.</li>
                  <li>Name and registeration number is present for all records </li>
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
