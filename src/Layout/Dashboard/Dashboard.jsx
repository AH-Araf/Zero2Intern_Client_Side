import { NavLink, Outlet } from "react-router-dom";
import { MdAdminPanelSettings, MdLibraryAdd, MdBookmarkAdded, MdManageHistory } from "react-icons/md";
import { LuTally4 } from "react-icons/lu";
// import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {

    const isAdmin = true;

    
    return (
        <div>
            <div className="drawer lg:drawer-open bg-white text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <span>Open Dashboard</span>
                    </label>

              
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side" data-aos="fade-right">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-70 min-h-full bg-gray-600 text-white border-e-8 border-green-300">

                        {/* <StudentDashboardProfile></StudentDashboardProfile> */}

                        <div className="divider"></div>

                        {
                            isAdmin ? <>
                            
                                <li><NavLink to="/dashboard/adminhome"><MdAdminPanelSettings /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/AddAnIntern"><MdLibraryAdd /> Add An Intern</NavLink></li>
                                <li><NavLink to="/dashboard/AddedInterns"><MdBookmarkAdded /> Added Interns</NavLink></li>
                                <li><NavLink to="/dashboard/AllApplicant"><LuTally4 /> All Applicant</NavLink></li>
                                <li><NavLink to="/dashboard/ManageInterns"><MdManageHistory /> Manage Interns</NavLink></li>


                            </> : <>
                            
                               
                            </>
                        }




                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;