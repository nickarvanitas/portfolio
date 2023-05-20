"use client"
import { useState } from "react";

export interface Error {
  fullname: string,
  email: string,
  subject: string,
  message: string
}

export default function Contact() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Error>();
  const [buttonText, setButtonText] = useState("Send Message");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };


  return (
    <div className="grid lg:grid-cols-2 bg-zinc-50">
      <div className="col-span-1 bg-zinc-700">
        <div className="flex items-center h-full justify-center">
          <div>
            <h1 className="text-4xl font-bold text-zinc-200 pb-3">
              Lets talk!
            </h1>
            <p className="text-lg text-zinc-300 font-light">
              Fill in the form and I&lsquo;ll get back to you as soon as I can.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1  bg-zinc-100 lg:bg-zinc-700 flex items-center px-0 md:px-4 lg:px-8" >
        <div className="w-full  p-4 lg:py-12 lg:px-8 bg-zinc-100">

          <h1 className="text-2xl font-bold text-zinc-800">
            Send a message
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
          >

            <label
              htmlFor="fullname"
              className="text-zinc-500 font-light mt-8"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-zinc-500"
            />
            {errors?.fullname && (
              <p className="text-red-500">Fullname cannot be empty.</p>
            )}

            <label
              htmlFor="email"
              className="text-zinc-500 font-light mt-4 mb-1"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-zinc-500"
            />
            {errors?.email && (
              <p className="text-red-500">Email cannot be empty.</p>
            )}

            <label
              htmlFor="subject"
              className="text-zinc-500 font-light mt-4 mb-1"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-zinc-500"
            />
            {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )}
            <label
              htmlFor="message"
              className="text-zinc-500 font-light mt-4 mb-1"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-zinc-500"
            ></textarea>
            {errors?.message && (
              <p className="text-red-500">Message body cannot be empty.</p>
            )}
            <div className="flex flex-row items-center justify-start mt-6">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-400 rounded-md text-white py-3 px-5 transition-default"
              >{buttonText}</button>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-blue-500 font-semibold text-sm my-2">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}