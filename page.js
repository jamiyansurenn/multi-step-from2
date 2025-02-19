"use client";
import { useState } from "react";
import UserInformationStep from "@/components/UserInformationStep";
import ProfileInformationStep from "@/components/ProfileInformationStep";
import ConfirmationStep from "@/components/ConfirmationStep";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <UserInformationStep onNext={handleNext} />}
      {step === 2 && (
        <ProfileInformationStep onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && <ConfirmationStep onBack={handleBack} />}
    </div>
  );
}