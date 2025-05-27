let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { faqRoutes } = require("./faqRoutes")
const { countryRoutes } = require("./countryRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/material",materialRoutes)
adminRoutes.use("/faq",faqRoutes)
adminRoutes.use("/country",countryRoutes)

module.exports={adminRoutes}