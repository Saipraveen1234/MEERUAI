"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqawpyrb";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage(null);
      setFormData({ firstName: "", lastName: "", workEmail: "", phone: "", company: "", role: "", whatToSee: "" });
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    try {
      const formPayload = new FormData();
      formPayload.append("name", `${formData.firstName} ${formData.lastName}`);
      formPayload.append("email", formData.workEmail);
      formPayload.append("_replyto", formData.workEmail);
      formPayload.append("phone", formData.phone);
      formPayload.append("company", formData.company);
      formPayload.append("role", formData.role);
      formPayload.append("message", formData.whatToSee);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formPayload,
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const errorData = await res.json().catch(() => null);
        if (errorData?.errors?.length > 0) {
          setErrorMessage(errorData.errors[0].message);
        } else {
          setErrorMessage("Something went wrong. Please try again or email us at contact@meeru.ai.");
        }
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again or email us at contact@meeru.ai.");
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 z-10 bg-white/80"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FF7448]/10 flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 text-[#FF7448]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-gray-900">Request received!</h2>
            <p className="text-[15px] text-gray-500 leading-relaxed">
              We'll be in touch within one business day.
            </p>
            <button
              onClick={onClose}
              className="mt-4 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FF7448] text-white text-[15px] font-medium hover:bg-[#FF7448]/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-1.5 pr-8">
          Request a Demo
        </h2>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
          See MeeruAI on your own finance data. We'll be in touch within one
          business day.
        </p>

        {status === "error" && errorMessage && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-5">
            {errorMessage}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                First name <span className="text-[#FF7448]">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Last name <span className="text-[#FF7448]">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
          </div>

          {/* Work Email */}
          <div>
            <label htmlFor="workEmail" className="block text-[13px] font-medium text-gray-700 mb-1.5">
              Work email <span className="text-[#FF7448]">*</span>
            </label>
            <input
              id="workEmail"
              type="email"
              name="workEmail"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-[13px] font-medium text-gray-700 mb-1.5">
              Phone <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+1 555 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
            />
          </div>

          {/* Company & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Company <span className="text-[#FF7448]">*</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                required
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Role <span className="text-[#FF7448]">*</span>
              </label>
              <input
                id="role"
                type="text"
                name="role"
                required
                autoComplete="organization-title"
                placeholder="Controller, CFO, FP&A..."
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7448]/20 focus:border-[#FF7448] transition-all"
              />
            </div>
          </div>

          {/* What would you like to see? */}
          <div>
            <label htmlFor="whatToSee" className="block text-[13px] font-medium text-gray-700 mb-1.5">
              What would you like to see?{" "}
              <span className="text-[#FF7448]">*</span>
            </label>
            <textarea
              id="whatToSee"
              name="whatToSee"
              required
              rows={2}
              autoComplete="off"
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
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7448] text-white text-[15px] font-medium hover:bg-[#FF7448]/90 transition-colors shadow-sm hover:shadow disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : <> Request a Demo <ArrowRight className="w-4 h-4" /> </>}
          </button>
        </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
