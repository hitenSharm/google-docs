import { FileTextFilled, LockOutlined,VideoCameraOutlined } from "@ant-design/icons";
import {  Button, Typography } from "@material-tailwind/react";

export const Header = () => {

  const allOptions=["File","Edit","View","Insert","Format","Tools","Extensions","Help"]

  return (
    <>
      <header className="flex justify-between items-center p-3 pb-1">
        <span
          onClick={() => {
            console.log("Take to home");
          }}
          className="cursor-pointer"
        >
          <FileTextFilled style={{ fontSize: "48px", color: "#0086F9" }} />
        </span>

        <div className="flex-grow px-2">
          <Typography variant="h5">Docs</Typography>

          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">            
            {allOptions.map(option => <p key={option} className="options"> {option} </p>)}       
            {/* rendered using array*/}
          </div>
        </div>       
        <div className="mr-7 cursor-pointer">
        <VideoCameraOutlined style={{
          fontSize:"25px"
        }}/> 
        </div>
        <Button
          size="regular"
          ripple="light"                    
          className="items-center gap-3 hidden md:inline-flex h-10 rounded-3xl bg-[#C2E7FE] text-black" //button only appears on medium screen size
        >          
          <LockOutlined
            style={{
              fontSize: "25px",
            }}
          />{" "}
          Share
        </Button>
        <img
          src="/images/hiten.webp"
          alt="avatar"
          className="rounded-full cursor-pointer h-10 w-10 ml-2"
        />
      </header>
    </>
  );
};
