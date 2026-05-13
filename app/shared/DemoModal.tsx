"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    company: "",
    role: "",
    whatToSee: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook up to your backend / form service
    alert("Thank you! We'll be in touch within one business day.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[540px] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Request a Demo
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
          See MeeruAI on your own finance data. We'll be in touch within one
          business day.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
                First name <span className="text-[#FF7448]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Last name <span className="text-[#FF7448]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
              Work email <span className="text-[#FF7448]">*</span>
            </label>
            <input
              type="email"
              name="workEmail"
              required
              placeholder="you@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
              Phone <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 555 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
            />
          </div>

          {/* Company & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Company <span className="text-[#FF7448]">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Role <span className="text-[#FF7448]">*</span>
              </label>
              <input
                type="text"
                name="role"
                required
                placeholder="Controller, CFO, FP&A..."
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
          </div>

          {/* What would you like to see? */}
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
              What would you like to see?{" "}
              <span className="text-[#FF7448]">*</span>
            </label>
            <textarea
              name="whatToSee"
              required
              rows={3}
              placeholder="Close, variance, performance..."
              value={formData.whatToSee}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all resize-none"
            />
          </div>

          {/* Required fields note */}
          <p className="text-[11px] text-gray-400">
            <span className="text-[#FF7448]">*</span> Required fields
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7448] text-white text-[15px] font-medium hover:bg-[#FF7448]/90 transition-colors shadow-sm hover:shadow"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
