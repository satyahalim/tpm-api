import { Sequelize } from "sequelize";
import db from "../database/db.js";

const {DataTypes} = Sequelize
const Wishlist = db.define(
    "wishlist",{
        title : DataTypes.STRING,
        price : DataTypes.FLOAT,
        desc : DataTypes.TEXT,
        image : DataTypes.BLOB,
        category : DataTypes.STRING,
        priority : DataTypes.STRING,
        acquired: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
)

db.sync().then(()=>console.log("wishlist synchronized"))
export default Wishlist