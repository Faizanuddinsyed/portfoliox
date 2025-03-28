import Contact from "../models/contactModel.js";

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
    res
      .status(201)
      .json({ success: true, message: "Message stored successfully!" }); // ✅ Fix: Send success response
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }
};

export const getContactController =async (req, res) => {
  try {
    const messages = await Contact.find({});
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }
}
