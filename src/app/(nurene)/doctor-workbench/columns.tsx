"use client"
import { doctorTableSchema } from "@/lib/validations/doctor-table"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import * as z from "zod"
import { DataTableColumnHeader } from "@/components/data-table-column-headers";

export type DoctorCol = z.infer<typeof doctorTableSchema>

export const columns: ColumnDef<DoctorCol>[] = [
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
      accessorKey: 'regNo',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Registeration Number" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("regNo")}</div>,
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
      accessorKey : "clinicName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Clinic Name" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("clinicName")}</div>,
      enableSorting:true,
    },
    {
        accessorKey: 'speciality',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Speciality" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("speciality")}</div>,
        enableSorting:false,
    },
    {
      accessorKey: 'region',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Region" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("region")}</div>,
  },
]