"use client";

import { useState } from "react";
import DatePicker from "@/components/ui/DatePicker";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Auto-close success message after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col p-6 sm:p-8 animate-in zoom-in duration-200 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Schedule a Pre-Order</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-600 transition-colors bg-neutral-100 hover:bg-neutral-200 rounded-full p-2"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">Pre-Order Scheduled!</h3>
            <p className="text-neutral-600 mb-8 max-w-sm">
              Thank you for trusting us. Our team will contact you shortly to confirm your order details and delivery window.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="po-name" className="text-sm font-semibold text-neutral-700">Full Name</label>
                <input
                  required
                  id="po-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="po-phone" className="text-sm font-semibold text-neutral-700">Phone Number</label>
                <input
                  required
                  id="po-phone"
                  type="tel"
                  placeholder="0901 234 5678"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="po-email" className="text-sm font-semibold text-neutral-700">Email Address (Optional)</label>
              <input
                id="po-email"
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="po-category" className="text-sm font-semibold text-neutral-700">Product Category</label>
              <select
                required
                id="po-category"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 appearance-none"
              >
                <option value="">Select a category...</option>
                <option value="Food & Produce">Food &amp; Produce (Fresh Meat/Fish)</option>
                <option value="Building Materials">Building Materials (Cement/Rods)</option>
                <option value="Meat Sharing">Meat Sharing (Controlled Bulk)</option>
                <option value="Electronics">Electronics &amp; Accessories</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="po-item" className="text-sm font-semibold text-neutral-700">Specific Item</label>
                <input
                  required
                  id="po-item"
                  type="text"
                  placeholder="e.g. 50 Bags of Cement"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="po-qty" className="text-sm font-semibold text-neutral-700">Quantity</label>
                <input
                  required
                  id="po-qty"
                  type="text"
                  placeholder="e.g. 50"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="po-date" className="text-sm font-semibold text-neutral-700">Preferred Delivery Date</label>
              <DatePicker
                id="po-date"
                required
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="po-address" className="text-sm font-semibold text-neutral-700">Delivery Address</label>
              <textarea
                required
                id="po-address"
                rows={3}
                placeholder="Full delivery address..."
                className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-primary py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Submit Pre-Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
