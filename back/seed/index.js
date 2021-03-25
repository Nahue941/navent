const { User, TestMade, Test, Question, Answer } = require("../models");
const 

/** Al crear una tabla que contiene un FK. El método bulkCreate revisa que 
 *  dicho id exista en la tabla a la cual quiero relacionar. Por ende se debe
 *  controlar el orden en que se crean las tablas. Primero debo crear las que no 
 *  tienen relación con ningunga otra tabla (en su interior no tienen FK), 
 *  y luego el resto.
 *  Orden de creación:
 *    1-Users
 *    2-Category
 * 
 *    3-Cart
 *    4-Product
 * 
 *    5-Review
 *    6-Items
 *  *El orden no necesariamente debe ser este pero un orden posible.
 */
