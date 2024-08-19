import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import Form from '../Letstalk/Form';
import { RxCross2 } from "react-icons/rx";

const ApplyForm = () => {
  const CloseButton = ({ closeToast }) => (
    <RxCross2 className='text-lg me-4' onClick={closeToast} />
  );
  const toastHandler = () => {
    console.log("toast"),

      toast('🎉🎉 Form Submitted!!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
        progressStyle: { backgroundColor: '#26C6DA' }
      });
  };

  const recruitDevelopersForm = {
    title: "Recruitment ",
    text: "We are seeking enthusiastic students to join our development team. Please fill out the form below with your details to apply.",
    active: true,
    img: "/images/recruit.png",
    borderColor: "#007bff",
    stepsData: [
      {
        title: "Personal Info",
        fields: [
          {
            fieldName: "Full Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your full name",
            max: 200,
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email address",
            max: 200,
          },
          {
            fieldName: "Mobile Number",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your mobile number",
            max: 10,
          }
        ],
      },
      {
        title: "Education",
        fields: [
          {
            fieldName: "College Name",
            inputType: "dropdown",
            datatype: "text",
            options: ["PICT Pune", "IIIT Kottayam", "IIIT Nagpur", "Other"],
            placeholder: "Select your college name",
          },
          {
            fieldName: "Year",
            inputType: "dropdown",
            datatype: "text",
            options: ["SE", "TE", "BE"],
            placeholder: "Select your Engineering year",
          },
          {
            fieldName: "Branch",
            inputType: "dropdown",
            datatype: "text",
            options: ["CS", "IT", "EnTC", "Other"],
            placeholder: "Select your Branch/area of study",
          },
        ]
      },
      {
        title: "Technical Info",
        fields: [
          {
            fieldName: "Preferred roles",
            inputType: "multiselect",
            datatype: "text",
            options: ["Frontend", "Backend", "Design", "Cloud", "FullStack"],
            placeholder: "Select your area of interest",
          },
          {
            fieldName: "Skills",
            inputType: "multiselect",
            datatype: "text",
            options: ["MongoDB", "React.Js + Next.Js", "Express.Js", "Node.Js", "Figma, Canva", "AWS"],
            placeholder: "List the programming languages you know (e.g., JavaScript, React.js, Node.js)",
          },
          {
            fieldName: "Innovative Idea",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Any innovative idea you possess to add to the website",
            max: 10000,
          },
        ],
      },
      {
        title: "Portfolio & Resume",
        fields: [
          {
            fieldName: "Projects Worked On",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Projects they've worked on (Brief description + tech stack used), GitHub/project link",
            max: 5000,
          },
          {
            fieldName: "Social Profiles",
            inputType: "textarea",
            datatype: "text",
            placeholder: "GitHub profile/Portfolio website link",
            max: 1000,
          },
        ],
      },
    ],
  };



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={CloseButton}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Form heading={recruitDevelopersForm.title} image={recruitDevelopersForm.img} stepsData={recruitDevelopersForm.stepsData} toastHandler={toastHandler} />

    </>
  )
}

export default ApplyForm