'use client'

import { useState } from 'react'
import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CarI } from '@/types/car.interface'
import { Modal } from '@/components/Modal'
import EditCarForm from '@/components/EditCarForm'
import { useQuery } from '@tanstack/react-query'
import { deleteCarAPI, getCarsAPI } from '@/lib/car.api'
import Spinner from '@/components/Spinner'
import { toast } from '@/components/ui/use-toast'

export const columns: ColumnDef<CarI>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'model',
    header: 'Model',
    cell: ({ row }) => <div className="lowercase">{row.getValue('model')}</div>,
  },
  {
    accessorKey: 'price',
    header: 'Price by hour',
    cell: ({ row }) => (
      <div className="font-semibold">
        {row.getValue('price')}$
      </div>
    ),
  },
  {
    accessorKey: 'availability',
    header: 'Availability',
    cell: ({ row }) => (
      <div>
        {row.getValue('availability')
          ? <p className="text-green-700">Available</p>
          : <p className="text-red-700">Not available</p>
        }
      </div>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => <div>{row.getValue('type')}</div>,
  },
  {
    accessorKey: 'stars',
    header: 'Stars',
    cell: ({ row }) => <div>{row.getValue('stars')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const handleDelete = (id: number) => {
        deleteCarAPI(String(id))
        toast({ title: 'Car deleted deleted successfully' })
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost"
                    className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="p-0"
              onSelect={(e) => e.preventDefault()}
            >
              <Modal modalOpen={
                <Button className="w-full flex justify-start"
                        variant="ghost">
                  Edit
                </Button>
              }
                     title={`Edit ${row.original.name}`}>
                <EditCarForm carId={String(row.original.id)} />
              </Modal>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <Button
                className="w-full flex justify-start"
                variant="ghost"
                onClick={() => handleDelete(row.original.id)}
              >
                Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function CarsTable() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ['cars'],
    queryFn: getCarsAPI,
  })
  const cars = data?.data as CarI[]

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: cars ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnVisibility,
      rowSelection,
    },
  })

  if (isLoading) return <Spinner />

  return (
    <div className="w-full py-14">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
