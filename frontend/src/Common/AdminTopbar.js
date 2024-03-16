import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Reducers/authSlice";

const AdminTopbar = () => {
   const navigate=useNavigate()
   const dispatch=useDispatch()
  const [dropDownAccount, setDropDownAccount] = useState(false);
   
  const username=useSelector((state)=>state?.auth?.user?.username)

  console.log(username)

  const handleActiveDropdown = () => {
    setDropDownAccount(!dropDownAccount);
  };

  

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="top--bar flex justify-between w-full py-3 bg-[#29313f] px-3">
        <div className="toggle--menu">
       
        </div>
        {/* end toggle menu mobile */}

        <div className="login--user relative">
          <div
            className="text-white flex items-center gap-[5px] cursor-pointer"
            onClick={handleActiveDropdown}
          >
            <FaUserCircle />
            <h3>{username}</h3>
          </div>
          {dropDownAccount && (
            <div className="drop-down--login absolute top-[100%] bg-white px-3 right-[0px] min-w-[150px] rounded-[10px] mt-3 shadow-lg border">
              <ul>
                <li className="cursor-pointer py-2 text-[14px] border-b">
                  Settings
                </li>
                <li onClick={handleLogout} className="cursor-pointer py-2 text-[14px]">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminTopbar;
