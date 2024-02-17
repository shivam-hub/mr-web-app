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
  import MedicalDetailsCard from "../medical-details-card";
  import { useState } from 'react';
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
  import { RadioGroupForm } from "@/components/add-user-sheet-radio";
import { CityComboboxForm } from "../city-combobox";
import { CategoryComboboxForm } from "../category-combobox";
  
  export default function AddDoctorSheet() {
    
    const [medicalDetails, setMedicalDetails] = useState([{ id: 1 }]);

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
                  Add the details of the doctor. Click Add when you're done.
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
                        />

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
                      </div>
                    </div>
                    <div >
                      <Button type="submit" >
                        Add
                      </Button>
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
                    <Button type="submit" className="my-5">
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
