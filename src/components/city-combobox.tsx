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

const city = [
    { label: "Agra", value: "AGR" },
    { label: "Ahmedabad", value: "AMD" },
    { label: "Ajmer", value: "AJM" },
    { label: "Aligarh", value: "ILG" },
    { label: "Allahabad", value: "ALD" },
    { label: "Amritsar", value: "ATQ" },
    { label: "Aurangabad", value: "IXU" },
    { label: "Bangalore", value: "BLR" },
    { label: "Bareilly", value: "BEK" },
    { label: "Bhopal", value: "BHO" },
    { label: "Bhubaneswar", value: "BBI" },
    { label: "Chandigarh", value: "IXC" },
    { label: "Chennai", value: "MAA" },
    { label: "Coimbatore", value: "CJB" },
    { label: "Delhi", value: "DEL" },
    { label: "Faridabad", value: "FBD" },
    { label: "Ghaziabad", value: "GZB" },
    { label: "Goa", value: "GOI" },
    { label: "Gurgaon", value: "GGN" },
    { label: "Guwahati", value: "GAU" },
    { label: "Hubballi-Dharwad", value: "HDB" },
    { label: "Hyderabad", value: "HYD" },
    { label: "Indore", value: "IDR" },
    { label: "Jaipur", value: "JAI" },
    { label: "Jalandhar", value: "QLD" },
    { label: "Jodhpur", value: "JDH" },
    { label: "Kanpur", value: "KNU" },
    { label: "Kochi", value: "COK" },
    { label: "Kolkata", value: "CCU" },
    { label: "Kota", value: "KTU" },
    { label: "Lucknow", value: "LKO" },
    { label: "Ludhiana", value: "LDH" },
    { label: "Madurai", value: "IXM" },
    { label: "Meerut", value: "MEU" },
    { label: "Moradabad", value: "MBD" },
    { label: "Mumbai", value: "BOM" },
    { label: "Nagpur", value: "NAG" },
    { label: "Nashik", value: "ISK" },
    { label: "Navi Mumbai", value: "NVI" },
    { label: "Noida", value: "ND" },
    { label: "Patna", value: "PAT" },
    { label: "Pimpri-Chinchwad", value: "PCD" },
    { label: "Pune", value: "PNQ" },
    { label: "Raipur", value: "RPR" },
    { label: "Rajkot", value: "RAJ" },
    { label: "Ranchi", value: "IXR" },
    { label: "Salem", value: "SXV" },
    { label: "Srinagar", value: "SXR" },
    { label: "Surat", value: "STV" },
    { label: "Thane", value: "THA" },
    { label: "Thiruvananthapuram", value: "TRV" },
    { label: "Thrissur", value: "TCR" },
    { label: "Tiruchirappalli", value: "TRZ" },
    { label: "Udaipur", value: "UDR" },
    { label: "Vadodara", value: "BDQ" },
    { label: "Varanasi", value: "VNS" },
    { label: "Vasai-Virar", value: "VV" },
    { label: "Vijayawada", value: "VGA" },
    { label: "Visakhapatnam", value: "VTZ" },
    { label: "Warangal", value: "WGC" }
] as const

const FormSchema = z.object({
  state: z.string({
    required_error: "Please select a state.",
  }),
})

export function CityComboboxForm() {
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
                        ? city.find(
                            (city) => city.value === field.value
                          )?.label
                        : "City"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search city..." />
                    <CommandEmpty>No city found.</CommandEmpty>
                    <CommandGroup>
                      {city.map((city) => (
                        <CommandItem
                          value={city.label}
                          key={city.value}
                          onSelect={() => {
                            form.setValue("state", city.value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              city.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {city.label}
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
