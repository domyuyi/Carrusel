import { StrictMode } from "react";
import { Outlet } from "react-router-dom";




const Basic = () => {
    return (
        
            <StrictMode>
              
                <div >
                    <div >
                        <Outlet></Outlet>
                     </div>
                </div>
                
              
            </StrictMode>
    
    );
}

export default Basic;