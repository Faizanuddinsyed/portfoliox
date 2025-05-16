// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const AdminMessages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/contact/getContacts"
//         );
//         setMessages(response.data);
//       } catch (err) {
//         setError(err.response?.data?.error || "Failed to fetch messages");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
//       {loading ? (
//         <p>Loading messages...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <ul className="space-y-4">
//           {messages.map((msg) => (
//             <li
//               key={msg._id}
//               className="p-4 border rounded shadow-md bg-white dark:bg-gray-800 text-black dark:text-white"
//             >
//               <p>
//                 <strong>Name:</strong> {msg.name}
//               </p>
//               <p>
//                 <strong>Email:</strong> {msg.email}
//               </p>
//               <p>
//                 <strong>Message:</strong> {msg.message}
//               </p>
//               <p className="text-sm text-gray-500">
//                 <strong>Sent At:</strong>{" "}
//                 {new Date(msg.createdAt).toLocaleString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AdminMessages;

import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const messagesPerPage = 4; // ✅ Show only 4 messages per page

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/contact/getContacts?page=${currentPage}&limit=${messagesPerPage}`
        );
        setMessages(response.data.messages);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [currentPage]); // ✅ Fetch messages whenever `currentPage` changes

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>

      {loading ? (
        <p>Loading messages...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li
                key={msg._id}
                className="p-4 border rounded shadow-md bg-white dark:bg-gray-800 text-black dark:text-white"
              >
                <p>
                  <strong>Name:</strong> {msg.name}
                </p>
                <p>
                  <strong>Email:</strong> {msg.email}
                </p>
                <p>
                  <strong>Message:</strong> {msg.message}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Sent At:</strong>{" "}
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>

          {/* ✅ Pagination Controls */}
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-lg font-bold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminMessages;

