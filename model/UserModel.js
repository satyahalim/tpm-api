import { Sequelize } from "sequelize";
import db from "../database/db.js";

const {DataTypes} = Sequelize
const User = db.define(
    "users",{
        username : DataTypes.STRING,
        password : DataTypes.TEXT 
    }
)

db.sync().then(()=>console.log("wishlist synchronized"))
export default User