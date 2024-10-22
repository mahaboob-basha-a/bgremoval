import multer from "multer";

// creaing multer middleware for parsing formdata
const storage = multer.diskStorage({
    filename:(req,file,callBack)=>{
        callBack(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

export default upload