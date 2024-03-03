"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/data-table-view-options";

import { statuses } from "./data";
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter";
import AddDoctorSheet from "@/components/sheets/doctor-workbench-add-sheet";
import { DatePicker } from "./schedule-visits";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: TData[];
}

export function DataTableToolbar<TData>({
  table,
  data
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const isSelected = table.getSelectedRowModel().rows.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Doctor Name..."
          value={
            (table.getColumn("name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {isSelected && (
        <div className="mr-5">
          <DatePicker rows={table.getSelectedRowModel().rows} data={data}></DatePicker>
        </div>
      )}
      <DataTableViewOptions table={table} />
      <AddDoctorSheet />
    </div>
  );
}
