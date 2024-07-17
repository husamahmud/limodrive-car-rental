'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import React from 'react'
import { toast } from '@/components/ui/use-toast'

const formSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  phone: z.string(),
  date: z.date(),
  message: z.string(),
})

export default function ModalForm({ carId }: { carId?: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values', values)
    form.reset()
    toast({ title: 'Your request has been submitted' })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl className="border-b-2 border-brand">
                  <Input
                    placeholder="Your Name*"
                    className="bg-transparent border-0 border-b-2 border-brand text-stone-200 placeholder:text-stone-400 outline-none ring-0 focus:ring-0 focus:outline-none rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input
                    placeholder="Your Email*"
                    className="bg-transparent border-0 border-b-2 border-brand text-stone-200 placeholder:text-stone-400 outline-none ring-0 focus:ring-0 focus:outline-none rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input
                    placeholder="Your Phone*"
                    className="bg-transparent border-0 border-b-2 border-brand text-stone-200 outline-none placeholder:text-stone-400 ring-0 focus:ring-0 focus:outline-none rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full hover:bg-transparent justify-start text-left font-normal bg-transparent border-0 border-b-2 border-brand text-stone-200 placeholder:text-stone-400 outline-none ring-0 focus:ring-0 focus:outline-none rounded-none',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-stone-400" />
                        {field.value ? format(field.value, 'PPP') :
                          <span className="text-stone-400">Pick a date</span>}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Please provide any additional details about your booking request"
                  className="resize-none bg-transparent border-0 border-b-2 border-brand text-stone-200 outline-none placeholder:text-stone-400 ring-0 focus:ring-0 focus:outline-none rounded-none "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="outline"
            className="border-brand bg-transparent text-white hover:text-white hover:bg-brand"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
