"use client";

import { Check, ChevronsUpDown } from "lucide-react";
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

const states = [
  { label: "Andaman and Nicobar Islands", value: "AN" },
  { label: "Andhra Pradesh", value: "AP" },
  { label: "Arunachal Pradesh", value: "AR" },
  { label: "Assam", value: "AS" },
  { label: "Bihar", value: "BR" },
  { label: "Chandigarh", value: "CH" },
  { label: "Chhattisgarh", value: "CT" },
  { label: "Dadra and Nagar Haveli and Daman and Diu", value: "DN" },
  { label: "Delhi", value: "DL" },
  { label: "Goa", value: "GA" },
  { label: "Gujarat", value: "GJ" },
  { label: "Haryana", value: "HR" },
  { label: "Himachal Pradesh", value: "HP" },
  { label: "Jammu and Kashmir", value: "JK" },
  { label: "Jharkhand", value: "JH" },
  { label: "Karnataka", value: "KA" },
  { label: "Kerala", value: "KL" },
  { label: "Ladakh", value: "LA" },
  { label: "Lakshadweep", value: "LD" },
  { label: "Madhya Pradesh", value: "MP" },
  { label: "Maharashtra", value: "MH" },
  { label: "Manipur", value: "MN" },
  { label: "Meghalaya", value: "ML" },
  { label: "Mizoram", value: "MZ" },
  { label: "Nagaland", value: "NL" },
  { label: "Odisha", value: "OR" },
  { label: "Puducherry", value: "PY" },
  { label: "Punjab", value: "PB" },
  { label: "Rajasthan", value: "RJ" },
  { label: "Sikkim", value: "SK" },
  { label: "Tamil Nadu", value: "TN" },
  { label: "Telangana", value: "TG" },
  { label: "Tripura", value: "TR" },
  { label: "Uttar Pradesh", value: "UP" },
  { label: "Uttarakhand", value: "UT" },
  { label: "West Bengal", value: "WB" },
] as const;

export function StateComboboxForm({
  onSelectState,
}: {
  onSelectState: (state: string) => void;
}) {
  const [selectedState, setSelectedState] = useState<string>("");

  return (
    <div className="space-y-6 w-80 mt-5 ml-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !selectedState && "text-muted-foreground"
            )}
          >
            {selectedState
              ? states.find((state) => state.value === selectedState)?.label
              : "State"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search state..." />
            <CommandEmpty>No state found.</CommandEmpty>
            <CommandGroup>
              {states.map((state) => (
                <CommandItem
                  value={state.label}
                  key={state.value}
                  onSelect={() => {
                    setSelectedState(state.value);
                    onSelectState(state.label);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      state.value === selectedState
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {state.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
