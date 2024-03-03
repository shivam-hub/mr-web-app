"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const speciality = [
  { label: "Allergy & Immunology", value: "Allergy & Immunology" },
  { label: "Anesthesiology", value: "Anesthesiology" },
  { label: "Cardiology", value: "Cardiology" },
  { label: "Dentistry", value: "Dentistry" },
  { label: "Dermatology", value: "Dermatology" },
  { label: "Emergency Medicine", value: "Emergency Medicine" },
  { label: "Endocrinology", value: "Endocrinology" },
  { label: "Family Medicine", value: "Family Medicine" },
  { label: "Gastroenterology", value: "Gastroenterology" },
  { label: "General Surgery", value: "General Surgery" },
  { label: "Geriatrics", value: "Geriatrics" },
  { label: "Hematology", value: "Hematology" },
  { label: "Infectious Disease", value: "Infectious Disease" },
  { label: "Internal Medicine", value: "Internal Medicine" },
  { label: "Nephrology", value: "Nephrology" },
  { label: "Neurology", value: "Neurology" },
  { label: "Obstetrics & Gynecology", value: "Obstetrics & Gynecology" },
  { label: "Oncology", value: "Oncology" },
  { label: "Ophthalmology", value: "Ophthalmology" },
  { label: "Orthopedics", value: "Orthopedics" },
  { label: "Otolaryngology", value: "Otolaryngology" },
  { label: "Pathology", value: "Pathology" },
  { label: "Pediatrics", value: "Pediatrics" },
  {
    label: "Physical Medicine & Rehabilitation",
    value: "Physical Medicine & Rehabilitation",
  },
  { label: "Plastic Surgery", value: "Plastic Surgery" },
  { label: "Psychiatry", value: "Psychiatry" },
  { label: "Pulmonology", value: "Pulmonology" },
  { label: "Radiology", value: "Radiology" },
  { label: "Rheumatology", value: "Rheumatology" },
  { label: "Urology", value: "Urology" },
];

export function SpecialityComboboxForm({
  onSelectSpeciality,
}: {
  onSelectSpeciality: (speciality: string) => void;
}) {
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>("");

  return (
    <div className="space-y-6 w-80 mt-5 ml-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !selectedSpeciality && "text-muted-foreground"
            )}
          >
            {selectedSpeciality
              ? speciality.find((city) => city.value === selectedSpeciality)
                  ?.label
              : "Speciality"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 h-30px">
          <Command>
            <CommandInput placeholder="Search speciality..." />
            <CommandEmpty>No speciality found.</CommandEmpty>
            <CommandGroup>
              {speciality.map((speciality) => (
                <CommandItem
                  value={speciality.label}
                  key={speciality.value}
                  onSelect={() => {
                    setSelectedSpeciality(speciality.value);
                    onSelectSpeciality(speciality.value);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      speciality.value === selectedSpeciality
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {speciality.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
