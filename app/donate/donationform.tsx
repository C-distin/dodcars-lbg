"use client";

import { DonationSchema, type DonationData } from "./schema";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";

export function DonationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DonationData>({
    resolver: standardSchemaResolver(DonationSchema),
  });

  return (
    <form className="rounded-xl bg-white shadow-sm boder p-6 space-y-6">
      <h2 className="text-2xl font-bold">Donation Form</h2>
      <div className="flex flex-col space-y-4 text-[#228b22]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <input
              {...register("firstName", { required: true })}
              type="text"
              placeholder="First Name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228b22] focus:border-[#228b22] transition-colors focus:outline-0"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last Name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228b22] focus:border-[#228b22] transition-colors focus:outline-0"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228b22] focus:border-[#228b22] transition-colors focus:outline-0"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("phoneNumber")}
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228b22] focus:border-[#228b22] transition-colors focus:outline-0"
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}
        <input
          {...register("amount", { required: true })}
          type="number"
          placeholder="Amount"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228b22] focus:border-[#228b22] transition-colors focus:outline-0"
        />
        {errors.amount && (
          <p className="text-red-500">{errors.amount.message}</p>
        )}
        <button
          type="submit"
          className="px-4 py-3 bg-[#228b22] text-white rounded-lg hover:bg-[#1e7e1e] transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
