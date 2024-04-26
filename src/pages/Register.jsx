import { useContext, useState } from "react";
import { AuthContext } from "../Authprovidfer/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { VscEyeClosed } from "react-icons/vsc";
import { RxEyeOpen } from "react-icons/rx";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser,logout}=useContext(AuthContext)
    const photoRegex = /^https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*$/;
    const [showpass,setShowPass]=useState(true)
    const navigate=useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      Username: ""
    }
  })

  
  const onSubmit = (data) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const password=data.password
    const name=data.Username
    const photoUrl=data.photo
   
    if(!photoRegex.test(photoUrl)){
		return toast.error("Provide a valid URL");
	}

    console.log(password,name,photoUrl)
    if(!regex.test(password)){
      return toast.error('weak password')
    }
    createUser(data.mail,data.password)
    .then(result=>{
      navigate('/login')
      logout()
      Swal.fire({
        title: "Registration succes!",
        text: "Login and continue",
        icon: "success"
      });

      updateProfile(auth.currentUser, {
        displayName: name,
         photoURL: photoUrl
      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      });
    })
    .catch(err=>{
      return toast.error('Invalid email or password')
      
    })
  }
    return (
        <div className="bg-bgimg bg-bottom  h-full p-4 bg-no-repeat bg-cover" >
        {/* <PageTitle title={'Register'}></PageTitle> */}
      <div className=" max-w-md my-4 mx-auto p-8 space-y-3 shadow-md rounded-xl  bg-white opacity-70 text-black" data-aos="fade-up"
   data-aos-duration="1000">
       <h1 className="text-2xl font-bold text-center">Register</h1>
       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
         <div className="space-y-1 text-sm">
           <label htmlFor="username" className="block font-bold">
             Name
           </label>
           <input
             type="text"
             name="username"
             id="username"
             placeholder="Username"
             className="w-full lg:px-2  py-3 rounded-md   border-2 border-solid border-gray-300 bg-white opacity-90  focus:border-violet-400"
             {...register("Username", { required: true })}
             aria-invalid={errors.Username ? "true" : "false"}
          
          />
           {errors.Username?.type === "required" && (
      <p className="text-red-500" role="alert">User name is required</p>
    )}
         </div>
         <div className="space-y-1 text-sm">
           <label htmlFor="email" className=" block font-bold">
             Your Email
           </label>
           <input
             type="email"
             name="email"
             id="email"
             placeholder="Your Email"
             className="w-full lg:px-2  py-3 rounded-md  border-2 border-solid border-gray-300 bg-white opacity-90  focus:border-violet-400"
             {...register("mail", { required: "Email Address is required" })}
             aria-invalid={errors.mail ? "true" : "false"}
           
           />
           {errors.mail && <p className="text-red-500" role="alert">{errors.mail.message}</p>}
         </div>
         <div className="space-y-1 text-sm">
           <label htmlFor="photo" className="block font-bold">
           photoURL
           </label>
           <input
             type="text"
             name="photo"
             id="photo"
             placeholder="https://"
             className="w-full lg:px-2  py-3 rounded-md  border-2 border-solid border-gray-300 bg-white opacity-90  focus:border-violet-400"
           
             {...register("photo", { required: "photo url is required" })}
             aria-invalid={errors.photo ? "true" : "false"}
           />
            {errors.photo && <p className="text-red-500" role="alert">{errors.photo.message}</p>}
         </div>
         <div className="space-y-1 text-sm">
           <label htmlFor="password" className="block font-bold">
             Password
           </label>
           <div className="relative">
           <input
             type={showpass && "password" || "text"}
             name="password"
             id="password"
             placeholder="Password"
             className="w-full lg:px-2 py-3 rounded-md  border-2 border-solid border-gray-300 focus:border-violet-400"
           
             {...register("password", { required: "password is required" })}
             aria-invalid={errors.password ? "true" : "false"}
            
           />
           <p onClick={()=>setShowPass(!showpass)} className="absolute top-3 right-4 cursor-pointer" >{
            showpass && <VscEyeClosed size={20}></VscEyeClosed> || <RxEyeOpen size={20}></RxEyeOpen>
           }</p>
           </div>
            {errors.password && <p className="text-red-500" role="alert">{errors.password.message}</p>}
           <div className="flex justify-end text-xs text-gray-400">
             <a className="text-green-400" rel="noopener noreferrer" href="#">
               Forgot Password?
             </a>
           </div>
         </div>
         <button className="block w-full p-3 text-center font-bold rounded-sm bg-green-500 border-none text-white">
           Register
         </button>
       </form>
     
    
       <p className="text-xs text-center sm:px-6 text-gray-400">
         Already have an account?
         <Link to={'/login'}
           rel="noopener noreferrer"
           href="#"
           className="underline text-green-500 font-bold"
         >
           Login
         </Link>
       </p>
     </div>
    </div>
    );
};

export default Register;