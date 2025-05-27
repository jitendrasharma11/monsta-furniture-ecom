let express=require("express")
const { faqAdd, faqView, faqSingleView, faqUpdate, faqDelete, faqMultipleDelete } = require("../../controllers/admin/faqController")

let faqRoutes = express.Router()

faqRoutes.post("/add", faqAdd)

faqRoutes.get("/view", faqView)
faqRoutes.get("/view/:id", faqSingleView)

faqRoutes.put("/update/:id", faqUpdate)

faqRoutes.delete("/delete/:id", faqDelete)

faqRoutes.post("/delete", faqMultipleDelete)

module.exports = { faqRoutes }