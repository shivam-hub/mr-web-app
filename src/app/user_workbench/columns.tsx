"use client"
import { userTableSchema } from "@/lib/validations/user-table"
import { ColumnDef } from "@tanstack/react-table"
import { labels, priorities, statuses } from "./data";
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"


import * as z from "zod"
import { DataTableColumnHeader } from "./data-table-column-headers";


export type UserCol = z.infer<typeof userTableSchema>

export const columns: ColumnDef<UserCol>[] = [
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
        accessorKey: 'userId',
        // header: "User Id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="User Id" />
          ),
          cell: ({ row }) => <div className="w-[80px]">{row.getValue("userId")}</div>,
          enableSorting: false,
          enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
          ),
          cell: ({ row }) => {
            const label = labels.find((label) => label.value === row.original.name)
      
            return (
              <div className="flex space-x-2">
                {label && <Badge variant="outline">{label.label}</Badge>}
                <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("name")}
                </span>
              </div>
            )
          },
        // header: 'Name'
    },
    {
        accessorKey: 'password',
        header: 'Password'
    }
]