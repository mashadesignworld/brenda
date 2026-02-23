"use client";

import { useState } from "react";
import FooterSection from "./FooterSection";
import BookMeModal from "./BookMeModal";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {children}

      <FooterSection openBooking={() => setIsBookingOpen(true)} />

      {isBookingOpen && (
        <BookMeModal onClose={() => setIsBookingOpen(false)} />
      )}
    </>
  );
}