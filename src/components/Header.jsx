import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store=>store.user)
  const navigate = useNavigate()
  const handleLogout =async ()=>{
    axios.post(BASE_URL+'/logout',{},{
      withCredentials:true
    })
    dispatch(removeUser())
    navigate('/login')
  }
  return (
    <div className="navbar bg-base-900 shadow-md shadow-stone-700">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">DevTinder</Link>
      </div>
      {
        user && <div className="flex-none gap-2">
      <p className="text-slate-200">Welcome {user?.firstName}</p>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                className="bg-cover"
                alt="Profile picture"
                src={user.photoUrl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to='/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
        </div>
      }
     
    </div>
  );
};

export default Header;
