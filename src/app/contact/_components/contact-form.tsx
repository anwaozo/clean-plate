"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-context-menu";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { reachUsSection } from "../../../../cms-services/contact";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    // Basic tour info
    name: "Charles Garba",
    email: "",
    phone: "",
    tourDate: "17/03/2025",
    tourTime: "10.30 AM",
    hasAgent: "",
    comments: "",

    // Client contact information
    fullLegalName: "",
    preferredName: "",
    preferredContactMethod: "",
    currentAddress: "",
    bestTimesToContact: "",

    // Representation type
    representationType: "",

    // Additional questions
    howDidYouHear: "",
    referralSource: "",
    reasonForBuyingSelling: "",
    mostImportant: "",
    previousExperience: "",
    urgencyScale: "",
    concerns: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setSubmitStatus("error");
      setSubmitMessage(`Please fix the following errors: ${errors.join(", ")}`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      // Create FormData object for Netlify
      const form = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(form);

      // Add all our state data to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          formDataToSubmit.set(key, value);
        }
      });

      const response = await fetch("/netlify-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSubmit as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! Your tour request has been submitted successfully. Catherine will contact you soon to confirm your appointment."
        );

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            tourDate: "",
            tourTime: "",
            hasAgent: "",
            comments: "",
            fullLegalName: "",
            preferredName: "",
            preferredContactMethod: "",
            currentAddress: "",
            bestTimesToContact: "",
            representationType: "",
            howDidYouHear: "",
            referralSource: "",
            reasonForBuyingSelling: "",
            mostImportant: "",
            previousExperience: "",
            urgencyScale: "",
            concerns: "",
          });
          setSubmitStatus("idle");
          setSubmitMessage("");
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Sorry, there was an error submitting your form. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="font-archivo">
      <div className="max-w-7xl mx-auto md:px-6 py-12">
        {/* Main Heading */}
        <h1
          className="text-4xl lg:text-[56px] font-bold text-gray-900 text-center mb-16"
          data-aos="fade-down"
        >
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-[#ECEBE9] rounded-2xl shadow-lg overflow-hidden">
            {/* Green Header Section */}
            <div className="bg-[#0A4B45] px-2 md:px-8 py-8 text-center">
              <p className="text-white text-[26px] font-bold leading-relaxed">
                Do you have question, inquiries or properties you are interested
                in?
              </p>
            </div>

            {/* Form Section */}
            <div className="px-2 md:px-8 py-8 space-y-8">
              <form
                name="property-tour-form"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="property-tour-form"
                />

                {/* Section 1: Basic Tour Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#0A4B45] border-b-2 border-[#0A4B45] pb-2">
                    Tour Information
                  </h2>

                  {/* Name Field */}
                  <div data-aos-delay="300">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="pl-12 h-12 border-none bg-white shadow-none focus-visible:ring-0"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div data-aos-delay="400">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="pl-12 h-12 border-none bg-white shadow-none focus-visible:ring-0"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number Field */}
                  <div data-aos-delay="500">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="pl-12 h-12 border-none bg-white shadow-none focus-visible:ring-0"
                        required
                      />
                    </div>
                  </div>

                  {/* Preferred Tour Date */}
                  <div data-aos-delay="600">
                    <Label
                      htmlFor="tour-date"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Preferred Tour Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="tour-date"
                        name="tourDate"
                        type="text"
                        value={formData.tourDate}
                        onChange={(e) =>
                          handleInputChange("tourDate", e.target.value)
                        }
                        className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div data-aos-delay="700">
                    <Label
                      htmlFor="tour-time"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Preferred Time
                    </Label>
                    <div className="relative">
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="tour-time"
                        name="tourTime"
                        type="text"
                        value={formData.tourTime}
                        onChange={(e) =>
                          handleInputChange("tourTime", e.target.value)
                        }
                        className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Client Contact Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#0A4B45] border-b-2 border-[#0A4B45] pb-2">
                    Client Contact Information
                  </h2>

                  {/* Full Legal Name */}
                  <div data-aos-delay="300">
                    <Label
                      htmlFor="full-legal-name"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Full Legal Name(s)
                    </Label>
                    <Input
                      id="full-legal-name"
                      name="fullLegalName"
                      type="text"
                      placeholder="Full legal name as it appears on documents"
                      value={formData.fullLegalName}
                      onChange={(e) =>
                        handleInputChange("fullLegalName", e.target.value)
                      }
                      className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Preferred Name */}
                  <div data-aos-delay="400">
                    <Label
                      htmlFor="preferred-name"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Preferred Name(s)
                    </Label>
                    <Input
                      id="preferred-name"
                      name="preferredName"
                      type="text"
                      placeholder="What would you like to be called?"
                      value={formData.preferredName}
                      onChange={(e) =>
                        handleInputChange("preferredName", e.target.value)
                      }
                      className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div data-aos-delay="500">
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Preferred Contact Method
                    </Label>
                    <RadioGroup
                      value={formData.preferredContactMethod}
                      onValueChange={(value) =>
                        handleInputChange("preferredContactMethod", value)
                      }
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="call" id="call" />
                        <Label htmlFor="call">Call</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="text" id="text" />
                        <Label htmlFor="text">Text</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact">Email</Label>
                      </div>
                    </RadioGroup>
                    <input
                      type="hidden"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                    />
                  </div>

                  {/* Current Address */}
                  <div data-aos-delay="600">
                    <Label
                      htmlFor="current-address"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Current Address
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <Textarea
                        id="current-address"
                        name="currentAddress"
                        placeholder="Your current address"
                        value={formData.currentAddress}
                        onChange={(e) =>
                          handleInputChange("currentAddress", e.target.value)
                        }
                        rows={3}
                        className="pl-12 border-none bg-white shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  {/* Best Times to Contact */}
                  <div data-aos-delay="700">
                    <Label
                      htmlFor="best-times"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Best Times to Contact You
                    </Label>
                    <Input
                      id="best-times"
                      name="bestTimesToContact"
                      type="text"
                      placeholder="e.g., Weekdays 9am-5pm, Evenings after 6pm"
                      value={formData.bestTimesToContact}
                      onChange={(e) =>
                        handleInputChange("bestTimesToContact", e.target.value)
                      }
                      className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                {/* Section 3: Representation Type */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#0A4B45] border-b-2 border-[#0A4B45] pb-2">
                    Representation Type
                  </h2>

                  <div data-aos-delay="300">
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      I am looking for representation as a:
                    </Label>
                    <RadioGroup
                      value={formData.representationType}
                      onValueChange={(value) =>
                        handleInputChange("representationType", value)
                      }
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="buyer" id="buyer" />
                        <Label htmlFor="buyer">Buyer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="seller" id="seller" />
                        <Label htmlFor="seller">Seller</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="leasing-investor"
                          id="leasing-investor"
                        />
                        <Label htmlFor="leasing-investor">
                          Leasing / Investor
                        </Label>
                      </div>
                    </RadioGroup>
                    <input
                      type="hidden"
                      name="representationType"
                      value={formData.representationType}
                    />
                  </div>
                </div>

                {/* Section 4: Additional Questions */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#0A4B45] border-b-2 border-[#0A4B45] pb-2">
                    Additional Information
                  </h2>

                  {/* How did you hear about me */}
                  <div data-aos-delay="300">
                    <Label
                      htmlFor="how-did-you-hear"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      How did you hear about me?
                    </Label>
                    <Input
                      id="how-did-you-hear"
                      name="howDidYouHear"
                      type="text"
                      placeholder="e.g., Google search, referral, social media"
                      value={formData.howDidYouHear}
                      onChange={(e) =>
                        handleInputChange("howDidYouHear", e.target.value)
                      }
                      className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Referral source */}
                  <div data-aos-delay="400">
                    <Label
                      htmlFor="referral-source"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Who can I thank for the referral?
                    </Label>
                    <Input
                      id="referral-source"
                      name="referralSource"
                      type="text"
                      placeholder="Name of person who referred you (if applicable)"
                      value={formData.referralSource}
                      onChange={(e) =>
                        handleInputChange("referralSource", e.target.value)
                      }
                      className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Main reason for buying/selling */}
                  <div data-aos-delay="500">
                    <Label
                      htmlFor="reason-buying-selling"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      What's your main reason for buying/selling?
                    </Label>
                    <Textarea
                      id="reason-buying-selling"
                      name="reasonForBuyingSelling"
                      placeholder="Tell us about your motivation"
                      value={formData.reasonForBuyingSelling}
                      onChange={(e) =>
                        handleInputChange(
                          "reasonForBuyingSelling",
                          e.target.value
                        )
                      }
                      rows={3}
                      className="border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Most important in process */}
                  <div data-aos-delay="600">
                    <Label
                      htmlFor="most-important"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      What is most important to you in this process?
                    </Label>
                    <Textarea
                      id="most-important"
                      name="mostImportant"
                      placeholder="e.g., finding the right price, quick sale, specific location"
                      value={formData.mostImportant}
                      onChange={(e) =>
                        handleInputChange("mostImportant", e.target.value)
                      }
                      rows={3}
                      className="border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Previous experience */}
                  <div data-aos-delay="700">
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Have you bought or sold real estate before?
                    </Label>
                    <RadioGroup
                      value={formData.previousExperience}
                      onValueChange={(value) =>
                        handleInputChange("previousExperience", value)
                      }
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="experience-yes" />
                        <Label htmlFor="experience-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="experience-no" />
                        <Label htmlFor="experience-no">No</Label>
                      </div>
                    </RadioGroup>
                    <input
                      type="hidden"
                      name="previousExperience"
                      value={formData.previousExperience}
                    />
                  </div>

                  {/* Urgency scale */}
                  <div data-aos-delay="800">
                    <Label
                      htmlFor="urgency-scale"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      On a scale of 1-10, how urgent is your timeline?
                    </Label>
                    <Select
                      value={formData.urgencyScale}
                      onValueChange={(value) =>
                        handleInputChange("urgencyScale", value)
                      }
                    >
                      <SelectTrigger className="h-12 border-none bg-white shadow-none focus-visible:ring-0">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}{" "}
                            {num === 1
                              ? "(No rush)"
                              : num === 10
                              ? "(Very urgent)"
                              : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      name="urgencyScale"
                      value={formData.urgencyScale}
                    />
                  </div>

                  {/* Concerns */}
                  <div data-aos-delay="900">
                    <Label
                      htmlFor="concerns"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Any concerns or questions about the process?
                    </Label>
                    <Textarea
                      id="concerns"
                      name="concerns"
                      placeholder="Share any concerns or questions you have"
                      value={formData.concerns}
                      onChange={(e) =>
                        handleInputChange("concerns", e.target.value)
                      }
                      rows={4}
                      className="border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>

                  {/* Real Estate Agent Question */}
                  <div data-aos-delay="1000">
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Are you currently working with a real estate agent?
                    </Label>
                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        className={`${
                          formData.hasAgent === "yes"
                            ? "bg-[#0A4B45] text-white border-[#0A4B45]"
                            : "border-none bg-white shadow-none text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={() => handleInputChange("hasAgent", "yes")}
                      >
                        Yes
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className={`${
                          formData.hasAgent === "no"
                            ? "bg-[#0A4B45] text-white border-[#0A4B45]"
                            : "border-none bg-white shadow-none text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={() => handleInputChange("hasAgent", "no")}
                      >
                        No
                      </Button>
                    </div>
                    <input
                      type="hidden"
                      name="hasAgent"
                      value={formData.hasAgent}
                    />
                  </div>

                  {/* Additional Comments */}
                  <div data-aos-delay="1100">
                    <Label
                      htmlFor="comments"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Additional Comments or Questions
                    </Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      placeholder="Anything else you'd like us to know before your visit?"
                      value={formData.comments}
                      onChange={(e) =>
                        handleInputChange("comments", e.target.value)
                      }
                      rows={4}
                      className="border-none bg-white shadow-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A4B45] hover:bg-[#0A4B45] disabled:bg-gray-400 disabled:cursor-not-allowed text-white h-12 text-sm font-normal transition-colors"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
              {/* Status Message */}
              {submitStatus !== "idle" && (
                <div
                  className={`mx-2 md:mx-8 mt-4 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitMessage}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div
            className="space-y-8 border py-6 rounded-[8px]"
            data-aos="fade-left"
          >
            <div>
              <h2 className="px-4 text-2xl font-bold mb-6">
                {reachUsSection.heading}
              </h2>

              <Separator className="my-6" />

              <div className="px-4 space-y-6">
                {/* Office Address */}
                <div data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-sm font-normal text-[#797979] mb-2">
                    {reachUsSection.office.label}
                  </h3>
                  <p className="text-gray-800">
                    {reachUsSection.office.address}
                  </p>
                </div>

                {/* Contact Number */}
                <div data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-sm font-normal text-[#797979] mb-2">
                    {reachUsSection.contactNumber.label}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-800">
                      {reachUsSection.contactNumber.number}
                    </span>
                    <a
                      href={`tel:${reachUsSection.contactNumber.number.replace(
                        /\D/g,
                        ""
                      )}`}
                      aria-label="Call phone number"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-none bg-white shadow-none focus-visible:ring-0 text-gray-700"
                      >
                        Call
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-sm font-normal text-[#797979] mb-2">
                    {reachUsSection.email.label}
                  </h3>
                  <a
                    href="mailto:cathrealtor@gmail.com"
                    className="text-green-700 hover:text-green-800"
                  >
                    {reachUsSection.email.address}
                  </a>
                </div>
              </div>
            </div>

            {/* Connect Online */}
            <div className="px-4" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {reachUsSection.connectOnline.heading}
              </h2>

              <div className="space-y-4">
                {reachUsSection.connectOnline.links.map(
                  (link: { label: string; url: string }, idx: number) => (
                    <div
                      key={link.label}
                      data-aos="fade-up"
                      data-aos-delay={500 + idx * 100}
                    >
                      <h3 className="text-sm font-normal text-[#797979] mb-2">
                        {link.label}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <a
                          href={link.url}
                          className="text-green-700 hover:text-green-800 text-sm flex-1 truncate max-w-[260px]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.url}
                        </a>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
