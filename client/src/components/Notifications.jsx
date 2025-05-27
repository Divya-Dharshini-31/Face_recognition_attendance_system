import React from "react";
import { FaClock, FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaSearch, FaStar } from "react-icons/fa";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      icon: <FaClock className="text-purple-700 text-xl" />,
      title: "Late Entry",
      time: "Today 9:13 AM",
      message: "You arrived late today at 9:12 AM. Please be punctual.",
    },
    {
      id: 2,
      icon: <FaExclamationTriangle className="text-red-500 text-xl" />,
      title: "Absent Warning (Both Check-in and Check-out are not considered)",
      time: "Yesterday 11:00 AM",
      message: "You were marked Absent for the day. If you had valid presence or submitted a leave, please contact the administrator.",
    },
    {
      id: 3,
      icon: <FaCheckCircle className="text-green-500 text-xl" />,
      title: "Leave Approved",
      time: "Yesterday 10:30 AM",
      message: "Your Leave request from June 2 to June 5 has been approved.",
    },
    {
      id: 4,
      icon: <FaTimesCircle className="text-red-600 text-xl" />,
      title: "Leave Rejected",
      time: "10 May 9:00 AM",
      message: "Your Leave Request for May 16 was rejected due to exam schedule.",
    },
    {
      id: 5,
      icon: <FaExclamationTriangle className="text-yellow-500 text-xl" />,
      title: "Absent Warning (Either of the Check-in or Check-out are not done)",
      time: "24 April 9:30 AM",
      message: "You were marked Absent due to missing check-in or check-out records. Ensure both steps are done.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold text-blue-900">Notifications</h1>
        <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
          <div className="text-purple-900 text-xl">👤</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full md:w-1/2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search in Notifications"
            className="outline-none w-full bg-transparent"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm">Today</button>
          <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm">Starred</button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-300"
          >
            <div className="flex gap-4">
              <div className="pt-1">{item.icon}</div>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.time}</p>
                <p className="text-gray-700 text-sm">{item.message}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-yellow-500 mt-1">
              <FaStar />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
