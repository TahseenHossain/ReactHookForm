import { useForm } from "react-hook-form";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Signup from "../Image/Signup.jpg";

export default function App() {
  let [data, setData] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    setData(data);
    setIsOpen(true);
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="min-h-screen font-bold flex flex-col space-y-4 justify-center items-center bg-amber-50 lg:w-1/2 h-2/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-black text-base font-normal flex flex-col justify-center items-center">
            <label className="text-6xl flex items-center justify-center text-center w-full pb-8">
              Signup
            </label>
            <div className="flex flex-col my-1">
              <label className="font-medium">First Name</label>
              <input
                placeholder=" Enter your first name here"
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
                className="rounded-lg p-1 my-1 border-black border w-80"
              />
              {errors?.firstName?.type === "required" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  First name is required
                </p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Can not be more than 20 characters
                </p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Alphabet Only
                </p>
              )}
            </div>
            <div className="flex flex-col my-1">
              <label className="font-medium">Last Name</label>
              <input
                placeholder=" Enter your last name here"
                {...register("lastName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
                className="rounded-lg p-1 my-1 border-black border border-solid w-80"
              />
              {errors?.lastName?.type === "required" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Last name is required
                </p>
              )}
              {errors?.lastName?.type === "maxLength" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Can not be more than 20 characters
                </p>
              )}
              {errors?.lastName?.type === "pattern" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Alphabet Only
                </p>
              )}
            </div>
            {/* <div className="flex flex-col lg:flex-row items-center space-x-2">
              <label className="w-40 text-center lg:text-left">Email: </label>
              <input
                {...register("email", {
                  required: true,
                  maxLength: 50,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="rounded-lg p-2 border-black border border-solid my-3 w-96"
              />
              {errors?.email?.type === "required" && (
                <p role="alert">Email is required</p>
              )}
              {errors?.email?.type === "maxLength" && (
                <p role="alert">Can not be more than 50 characters</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p role="alert">Need a valid Email</p>
              )}
            </div> */}
            <div className="flex flex-col my-1">
              <label className="font-medium">Age</label>
              <input
                placeholder=" Enter your age here"
                type="number"
                {...register("age", { required: true, min: 18, max: 80 })}
                aria-invalid={errors.age ? "true" : "false"}
                className="rounded-lg p-1 my-1 border border-solid border-black w-80 text-black"
              />
              {errors?.age?.type === "required" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Age is required
                </p>
              )}
              {errors?.age?.type === "min" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Minimum Age should be 18
                </p>
              )}
              {errors?.age?.type === "max" && (
                <p role="alert" className="text-red-600 text-sm font-light">
                  Maximum Age can be 80
                </p>
              )}
            </div>
            <div className="flex flex-col my-1 ">
              <label className="font-medium">Gender</label>
              <select
                {...register("gender")}
                className="rounded-lg p-1 my-2 border border-solid border-black w-80 text-black text-center"
              >
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>Other</option>
              </select>
            </div>
            <div className=" text-white bg-red-600 p-1 rounded-lg flex items-center justify-center text-center border border-solid  border-black py-2 w-80 my-1">
              <input type="submit" />
            </div>
            <div>
              <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
              >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-2">
                    <DialogPanel
                      transition
                      className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                      <DialogTitle
                        as="h3"
                        className="text-base/7 font-medium text-red-500"
                      >
                        User Data
                      </DialogTitle>
                      <p className="mt-2 text-sm/6 text-black">
                        First Name: {data.firstName}
                      </p>
                      <p className="mt-2 text-sm/6 text-black">
                        Last Name: {data.lastName}
                      </p>
                      {/* <p className="mt-2 text-sm/6 text-black">
                        Last Name: {data.lastName}
                      </p> */}
                      <p className="mt-2 text-sm/6 text-black">
                        Age: {data.age}
                      </p>
                      <p className="mt-2 text-sm/6 text-black">
                        Gender: {data.gender}
                      </p>
                      <div className="mt-4">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                          onClick={close}
                        >
                          Got it, thanks!
                        </Button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </form>
      </div>
      <div className="h- flex relative">
        <img src={Signup} alt="" />
        <div className="absolute text-4xl md:text-7xl lg:text-8xl font-bold p-8 inset-x-0 bottom-0 bg-gradient-to-r from-black to-[#ffffff00] h-full">
          <div className="flex flex-col items-star mt-36 md:mt-64 lg:mt-64">
            <h1 className="text-red-500">Start</h1>
            <h1 className="text-white"> Your Reading</h1>
            <h1 className="text-white">Journey</h1>
            <h1 className="text-red-500">Now</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
