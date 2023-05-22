import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { Menu } from "antd";



export const Texteditor = () =>{    

    return(
        <div className="flex justify-center">
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor 
             toolbarClassName="flex sticky top-0 z-50 justify-center mx-auto"
             editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
            />
        </div>
        <div className="absolute right-0">
            <Menu mode="vertical">
                <Menu.Item style={{
                    marginBottom:"28px"
                }}>                    
                    <img src="../../../../images/png-transparent-google-calendar-google-s-logo-icon-thumbnail-removebg-preview.png" alt="calendar" className="rounded-full cursor-pointer h-12 w-14"></img>
                </Menu.Item>
                <Menu.Item style={{
                    marginBottom:"28px"
                }}>
                    <img src="../../../../images/558px-Google_Keep_icon__2020_.svg-removebg-preview.png" className="cursor-pointer h-10 ml-4" alt="keep"></img>
                </Menu.Item>
                <Menu.Item style={{
                    marginBottom:"28px"
                }}>
                    <img src="../../../../images/unnamed.webp" className="rounded-full cursor-pointer h-10 w-10 ml-2" alt="tasks"></img>
                </Menu.Item>
                <Menu.Item style={{
                    marginBottom:"28px"
                }}>
                    <img src="../../../../images/png-transparent-profile-icon-computer-icons-business-management-social-media-service-people-icon-blue-company-people-thumbnail-removebg-preview.png" alt="people" className="rounded-full cursor-pointer h-12 w-12 ml-2"></img>
                </Menu.Item>
                <Menu.Item style={{
                    marginBottom:"28px"
                }}>
                    <img src="../../../../images/googlemaps-removebg-preview.png" alt="maps" className="rounded-full cursor-pointer h-12 w-12 ml-2"></img>
                </Menu.Item>
            </Menu>
                            
        </div>
        </div>
    );
}