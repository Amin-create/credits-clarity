import React, { useState } from 'react'
import { Core } from '..';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const menu = [
    {
        // icon: <Icon name="App" />,
        path: "dashboard",
        name: "Dashboard",
    },
    {
        // icon: <Icon name="User" />,
        path: "manage-profile",
        name: "Manage Profile",
    },
    {
        // icon: <Icon name="Briefcase" />,
        path: "manage-jobs",
        name: "Manage Jobs",
    },
    {
        // icon: <Icon name="Users" />,
        path: "manage-candidates",
        name: "Manage Candidates",
    },
    {
        // icon: <Icon name="SmsNotification" />,
        path: "manage-subscription",
        name: "Manage Subscription",
    },
    {
        // icon: <Icon name="Chat1" size="19" />,
        path: "hat",
        name: "Chat",
    },
    {
        // icon: <Icon name="Bell1" />,
        path: "notification",
        name: "Notification",
    },
    {
        // icon: <Icon name="Envelope" />,
        path: "manage-email",
        name: "Manage Email",
    },
    {
        // icon: <Icon name="DocumentText" />,
        path: "manage-questionnaire",
        name: "Manage Questionnaire",
    },
]


function DashboardLayout() {
    // const [isChecked, setIsChecked] = useState(false);
    // console.log("email", email)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-scree n bg-layout">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                menu={menu}
            />
            <div className="flex flex-col flex-1">
                <Header toggleSidebar={toggleSidebar} />
                <main className="overflow-y-auto overflow-x-hidden flex-1 bg-gray-9 p-6">
                    <Outlet />
                </main>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    )
}

export default DashboardLayout