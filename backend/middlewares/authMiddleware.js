import jwt from "jsonwebtoken";

//middleware for admin
export const verifyAdmin = (req,res, next) => {
    try {
        if(!req.user || !req.user.role !== "admin") {
            return res.status(401).json({message:"Unauthorized"});
        }
        next();

    } catch (error) {
        console.log(error);
    }
}


//middleware for authentication

export const requireSignIn = (req,res,next) => {
    try {
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message:" you are Unauthorized"});
    }
}