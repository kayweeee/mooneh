import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
  <div>
    <button
    className="absolute ps-7 pt-6 z-10"
    onClick={ ()=> setToggle(!toggle)}
    >
      <FontAwesomeIcon icon={faBars} size="2xl"/>
    </button>

    {toggle && (
      <div className="absolute top-0 left-0 z-0 w-[30vw] ps-16 pt-20 inline-flex flex-col space-y-10 h-screen bg-grey text-l lg:text-xl font-body">
          <button 
         className="text-left"
         onClick={() => navigate('/moonvillage')}
         >
          Moon Village
          </button>
          <button 
          className="text-left"
          onClick={() => navigate('/addexpense')}
          >
          Add Expense
          </button>
          <button 
          className="text-left"
          onClick={() => navigate('/dashboard')}
         >
          Dashboard
          </button>
       </div>

      )
    }
  </div>

 
  );
}

export default NavBar;