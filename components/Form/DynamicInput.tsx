import React from 'react'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldValues, Path } from 'react-hook-form'
import { Textarea } from '../ui/textarea'

type DynamicFormFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'tel' | 'textarea'
  className?: string
}

const DynamicInput = <T extends FieldValues>({
  control,
  name,
  placeholder = '',
  type = 'text',
  className = 'border border-gray-300 rounded-md',
}: DynamicFormFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className='relative w-full'>
        <FormControl>
          {type === 'textarea' ? (
            <Textarea
              placeholder={placeholder}
              className={className}
              {...field}
            />
          ) : (
            <Input
              placeholder={placeholder}
              type={type}
              className={className}
              {...field}
            />
          )}
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default DynamicInput
