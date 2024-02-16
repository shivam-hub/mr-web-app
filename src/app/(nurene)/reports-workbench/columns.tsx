"use client"
import { reportsTableSchema } from "@/lib/validations/reports-table"
import { ColumnDef } from "@tanstack/react-table"
import {  priorities, statuses } from "./data";
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"



import * as z from "zod"
import { DataTableColumnHeader } from "@/components/data-table-column-headers";


export type ReportsCol = z.infer<typeof reportsTableSchema>

export const columns: ColumnDef<ReportsCol>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
      accessorKey: 'mrName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="MR Name" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("mrName")}</div>,
      enableSorting: false,
      enableHiding: false,
      minSize:100,
      maxSize:200,
      enableResizing:true
    },
    {
        accessorKey: 'doctorName',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Doctor Name" />
          ),
          cell: ({ row }) => <div className="w-[80px]">{row.getValue("doctorName")}</div>,
          enableHiding:true,
          enableSorting:true,
    },
    {
        accessorKey: 'region',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Region" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("region")}</div>,
    },
    {
      accessorKey : "visitedOn",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Visited On" />
      ),
      cell: ({ row }) => {
        const visitedOnStr = row.getValue("visitedOn");
        const dt = new Date(visitedOnStr as string);
        return <div className="w-[80px]">{dt.toLocaleDateString()}</div>
      },
      enableSorting:true,
    },
    {
        accessorKey: 'longitude',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Longitude" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("longitude")}</div>,
        enableSorting:false,
    },
    {
        accessorKey: 'latitude',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Latitude" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("latitude")}</div>,
        enableSorting:false,
    }
]