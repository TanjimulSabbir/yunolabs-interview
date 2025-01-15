import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Control, FieldValues, Path } from 'react-hook-form'

type DynamicSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  options: string[]
  placeholder?: string
  className?: string
}

const DynamicSelect = <T extends FieldValues>({
  control,
  name,
  options,
  placeholder = 'Select an option',
  className = '',
}: DynamicSelectProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative w-full">
          <FormControl>
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DynamicSelect
