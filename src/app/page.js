import { useState } from "react";
import { ContactInfoStep } from "@/components/ContactInfoStep";
import { FormHeader } from "@/components/FormHeader";
import { UserInfoStep } from "@/components/UserInfoStep";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <main>
      <div className="w-[460px] h-[516px] mx-auto bg-white shadow-sm">
        <FormHeader />

        <form className="mt-7 space-y-3">
          <UserInfoStep formValues={formValues} setFormValues={setFormValues} />
        </form>

        <ContactInfoStep />
      </div>
    </main>
  );
}