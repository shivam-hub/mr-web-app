"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { ScrollArea } from "@radix-ui/react-scroll-area"

const category = [
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
    { label: "Physical Medicine & Rehabilitation", value: "Physical Medicine & Rehabilitation" },
    { label: "Plastic Surgery", value: "Plastic Surgery" },
    { label: "Psychiatry", value: "Psychiatry" },
    { label: "Pulmonology", value: "Pulmonology" },
    { label: "Radiology", value: "Radiology" },
    { label: "Rheumatology", value: "Rheumatology" },
    { label: "Urology", value: "Urology" },
  ];
  

const FormSchema = z.object({
  state: z.string({
    required_error: "Please select a category.",
  }),
})

export function CategoryComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-80 mt-5 ml-1">
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                    
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? category.find(
                            (city) => city.value === field.value
                          )?.label
                        : "Category"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 h-30px">
                  <Command>
                    <CommandInput placeholder="Search category..." />
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                      {category.map((category) => (
                        <CommandItem
                          value={category.label}
                          key={category.value}
                          onSelect={() => {
                            form.setValue("state", category.value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              category.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>

                </PopoverContent>
           
              </Popover>
              
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
