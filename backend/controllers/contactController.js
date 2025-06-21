// import Contact from "../models/contactModel.js";

// export const contactController = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }
//     const newMessage = new Contact({ name, email, message });
//     await newMessage.save();
//     res
//       .status(201)
//       .json({ success: true, message: "Message stored successfully!" }); // ✅ Fix: Send success response
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//     console.log(error.message);
//   }
// };

// export const getContactController =async (req, res) => {
//   try {
//     const messages = await Contact.find({});
//     res.json(messages);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//     console.log(error.message);
//   }
// }


import Contact from "../models/contactModel.js";

// ✅ Store a New Contact Message
export const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message stored successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Fetch Contact Messages with Pagination
// export const getContactController = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1; // Get page number from query
//     const limit = parseInt(req.query.limit) || 4; // Default: 4 messages per page
//     const skip = (page - 1) * limit; // Calculate how many records to skip

//     const totalMessages = await Contact.countDocuments(); // Get total number of messages
//     const totalPages = Math.ceil(totalMessages / limit); // Calculate total pages

//     const messages = await Contact.find()
//       .sort({ createdAt: -1 }) // Sort messages (latest first)
//       .skip(skip)
//       .limit(limit);

//     res.json({ success: true, messages, totalPages, currentPage: page });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

export const getContactController= async(req,res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) ||4;
    const skip = (page-1)*limit;

    const totalDocuments = await Contact.countDocuments();
    const totalPages = Math.ceil(totalDocuments/limit);

    const messages = await Contact.find()
    .sort({createdAt : -1})
    .skip(skip)
    .limit(limit);

    res.json({
      success:true, messages,totalPages, currentPage: page
    })

  } catch (error) {
    console.log("Error while  fetching data",error)
  }
}


