import { useState } from "react";
import axios from "axios";

import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SubmitButton from "./SubmitButton";

function LeadForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    goals: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        "https://simplifiq-ai-audit-system.onrender.com/api/leads",
        formData
      );

      console.log(response.data);

      alert("Lead Submitted Successfully");

      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        goals: "",
      });

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-5"
    >

      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          AI Lead Intake
        </h1>

        <p className="text-gray-500 mt-2">
          Get your personalized business audit report
        </p>
      </div>

      <InputField
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <InputField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />

      <InputField
        type="text"
        name="website"
        placeholder="Website URL"
        value={formData.website}
        onChange={handleChange}
      />

      <TextAreaField
        name="goals"
        value={formData.goals}
        onChange={handleChange}
      />

      <SubmitButton loading={loading} />

    </form>
  );
}

export default LeadForm;