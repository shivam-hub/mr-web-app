"use client";
import { doctorTableSchema } from "@/lib/validations/doctor-table";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import * as z from "zod";
import { DataTableColumnHeader } from "@/components/data-table-column-headers";

export type DoctorCol = z.infer<typeof doctorTableSchema>;

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
    enableHiding: false,
  },
  {
    accessorKey: "regNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reg No." />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("regNo")}</div>,
    enableSorting: false,
    enableHiding: false,
    minSize: 100,
    maxSize: 200,
    enableResizing: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Doctor Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("name")}</div>
    ),
    enableHiding: true,
    enableSorting: true,
  },
  {
    accessorKey: "speciality",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Speciality" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("speciality")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "addressLine1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address Line 1" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("addressLine1")}</div>,
  },
  {
    accessorKey: "addressLine2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address Line 2" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("addressLine2")}</div>,
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("city")}</div>,
  },
  {
    accessorKey: "east_west",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="East / West" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("east_west")}</div>,
  },
  {
    accessorKey: "associatedMRName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Visited By MR" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("associatedMRName")}</div>,
  }
];
