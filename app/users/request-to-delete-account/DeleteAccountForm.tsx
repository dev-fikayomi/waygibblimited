"use client";

import { useState } from "react";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [agree, setAgree] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!reason || reason.trim().length < 10) {
      setError("Please provide a reason (minimum 10 characters).");
      return;
    }
    if (!agree) {
      setError("You must acknowledge that this action is irreversible.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Success
      setShowModal(true);
      setEmail("");
      setReason("");
      setAgree(false);
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-neutral-100 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div 
          className="mx-auto max-w-2xl rounded-2xl bg-[#050A18] p-6 shadow-xl border border-white/5 sm:rounded-3xl sm:p-8 md:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Account Deletion Request
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              We are sorry to see you go. Please complete this form to request the deletion of your account and associated data.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm font-medium text-red-400">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                Registered Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. yourname@example.com"
                disabled={isSubmitting}
                className="w-full rounded-xl border border-white/10 bg-[#1a1d24] px-4 py-3.5 text-white placeholder:text-white/35 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40 disabled:opacity-50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-semibold text-white/90 mb-2">
                Reason to Delete Application / Account <span className="text-accent">*</span>
              </label>
              <textarea
                id="reason"
                name="reason"
                required
                rows={5}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please tell us why you want to delete your application/account..."
                disabled={isSubmitting}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#1a1d24] px-4 py-3.5 text-white placeholder:text-white/35 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40 disabled:opacity-50 transition-colors"
              />
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  disabled={isSubmitting}
                  className="h-4 w-4 rounded border-white/10 bg-[#1a1d24] text-accent focus:ring-accent focus:ring-offset-[#050A18] focus:outline-none cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agree" className="font-medium text-white/80 cursor-pointer select-none leading-relaxed">
                  I understand that this action is irreversible and all my data, including order history and saved preferences, will be permanently deleted.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-accent py-4 text-base font-bold text-white transition-all hover:bg-accent/90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-accent/20 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </>
              ) : (
                "Submit Deletion Request"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div 
            className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-16 h-16 bg-red-100 text-accent rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Submitted</h3>
            <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
              We have received your account deletion request. A confirmation email has been sent to your registered address. We will verify and process the removal of your data within 7 business days.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-[#050A18] text-white rounded-xl font-semibold hover:bg-neutral-800 transition-colors shadow-lg cursor-pointer"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
