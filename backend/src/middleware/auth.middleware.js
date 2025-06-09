import {clerkclient} from '@clerk/express';

export const protectRoute = async (req, res, next) => {
if(!req.auth.userId){
    res.status(401).json({message: "Unauthorized - you must be logged in"});
    return
}

next();
};
export const requireAdmin = async(req, res, nexr) =>{
    try {
        const currentUser = await clerkclient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
        if(!isAdmin){
            return res.status(403).json({message: "Forbidden - you are not an admin"});
            
        }
        next();
        
    } catch (error) {
        
        res.status(500).json({message: "Internal server error", error});
        
    }
}
