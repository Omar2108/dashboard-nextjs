'use client';

import { Customer } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditCustomerForm({
  customers
}: { 
  customers: Customer
}) {

  const initialState = { message: null, errors: {} };
  const updateCustomerWithId = updateCustomer.bind(null, customers.id);
  const [state, dispatch] = useFormState(updateCustomerWithId, initialState);
 
  return (
    <form action={dispatch} >
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      {/* Customer Name */}
      <div className="mb-4">
        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Choose an customer
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="name_customer"
              name="name_customer"
              type="text"
              placeholder="Enter name customer"
              defaultValue={customers.name}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

            />
          </div>
        </div>
        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      {/* Customer email */}
      <div className="mb-4">
        <label htmlFor="email_customer" className="mb-2 block text-sm font-medium">
          Choose an email
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email customer"
              defaultValue={customers.email}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      {/* Customer image */}
      <div className="mb-4">
        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Choose an image customer
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="file"
              name="file"
              type="file"
              placeholder="Enter image customer"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            
            />
          </div>
        </div>
        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.image &&

            <p className="mt-2 text-sm text-red-500">
              Please add an image
            </p>
          }
        </div>
      </div>

    </div>
    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/dashboard/customers"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Edit Customer</Button>
    </div>
  </form>
  );
}
