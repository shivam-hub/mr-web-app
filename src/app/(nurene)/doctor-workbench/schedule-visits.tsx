"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { CircularProgress } from "@nextui-org/react";

interface DatePickerProps<TData> {
  rows: Row<TData>[];
  data: TData[];
}

export function DatePicker<TData>({ rows, data }: DatePickerProps<TData>) {
  const [date, setDate] = React.useState<Date>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getDisabledDateRange = (): DateRange => {
    const today = new Date();
    return {
      from: new Date(1800, 1, 1),
      to: new Date(today.setDate(today.getDate() - 1)),
    };
  };
  const disabledDateRange = getDisabledDateRange();

  const scheduleBtnClicked = async () => {
    setIsLoading(true);
    const dataJson = JSON.parse(JSON.stringify(data));
    const rowJson = JSON.parse(JSON.stringify(rows))

    const drIds = rowJson.map((row:any) => row.original.drId);
    const filteredData = dataJson.filter((item:any) => drIds.includes(item.drId));

    const payload = filteredData.map((d : any) => ({
        mrId: d.associatedMRId,
        doctorInfo: d,
        plannedVisitDate: date,
    }))

    const response = await fetch("api/scheduleVisits/bulkAdd",{
        method: "POST",
        body: JSON.stringify(payload),
      });
    setIsLoading(false);

  };

  return (
    isLoading ? 
    <CircularProgress/>
    :
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Schedule Visits</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={disabledDateRange}
        />
        <div className="text-right mr-4 mb-5">
          <button
            type="submit"
            className={cn(buttonVariants())}
            style={{ width: "80px" }}
            onClick={() => scheduleBtnClicked()}
            disabled={isLoading}
          >
            Schedule
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
