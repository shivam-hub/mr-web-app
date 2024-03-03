"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
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

const person = [
    { label: "Alice", value: "ALC" },
    { label: "Bob", value: "BOB" },
    { label: "Charlie", value: "CHL" },
    { label: "David", value: "DVD" },
    { label: "Eve", value: "EVE" },
    { label: "Frank", value: "FRK" },
    { label: "Grace", value: "GRC" },
    { label: "Heidi", value: "HDI" },
] as const;

export function PersonComboboxForm({
  onSelectPerson,
}: {
  onSelectPerson: (person: string) => void;
}) {
  const [selectedPerson, setSelectedPerson] = useState<string>("");

  return (
    <div className="space-y-6 w-80 mt-5 ml-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !selectedPerson && "text-muted-foreground"
            )}
          >
            {selectedPerson
              ? person.find((person) => person.value === selectedPerson)?.label
              : "Reports to"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search person..." />
            <CommandEmpty>No person found.</CommandEmpty>
            <CommandGroup>
              {person.map((person) => (
                <CommandItem
                  value={person.label}
                  key={person.value}
                  onSelect={() => {
                    setSelectedPerson(person.value);
                    onSelectPerson(person.value);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      person.value === selectedPerson ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {person.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
