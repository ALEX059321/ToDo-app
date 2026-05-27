import router from express;
import User from "../models/user"


const router = express.Router();



//SIGN IN 
router.post("/register", async (req,res) => {
    try {
        const {username,email,password} = req.body;
        const user = new User({username,email,password})
        await user.save().then(() => {
            res.status(200).json({ user: user});        }) 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;