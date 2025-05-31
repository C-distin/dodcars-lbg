"use client";

import { DonationSchema, type DonationData } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function DonationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DonationData>({
    resolver: zodResolver(DonationSchema),
  });

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <input
            {...register(firstName)}
            type="text"
            placeholder="First Name"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228b22] focus:border-[#228b22] transition-colors"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
      </div>
    </form>
  );
}
