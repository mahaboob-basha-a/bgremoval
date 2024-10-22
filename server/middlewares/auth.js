import jwt from 'jsonwebtoken'

//middleware function to decode jwt token to get clerkid
const authUser = async (req,resizeBy,next)=>{
    try {

        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.decode(token, { complete: true})
        req.body.clerkId = token_decode.payload.clerkId
        next()
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

export default authUser