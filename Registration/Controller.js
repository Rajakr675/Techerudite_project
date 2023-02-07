const knex = require("./Data_base");
const {GenrateToken}=require("./JWT")

// =====================================>  FOR CUSTOMER ROLE <=========================//

const CustomerRegistration = async (req, res) => {
  try {
    // res.send('Route is running properly...')
    if (req.body.Email.includes("@")) {
      let customer_data = {
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email: req.body.Email,
        Password: req.body.Password,
        role: req.body.role,
      };
      if (customer_data.role == "customer_role") {
        let Data = await knex("customer_servise").insert(customer_data);
        res.json({
            status:201,
          Account: Data,
          mesg: "Your Customer_Account Is Create Succesfully...!",
        });
        console.log("Your Customer_Account Is Create Succesfully...!");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// ============================> FOR ADMIN ROLE  <=====================//

const AdminRegistrations = async (req, res) => {
  try {
   
    // res.send('Admin functions is running')
    if (req.body.Email.includes("@")) {
        let Admin_data = {
            First_Name: req.body.First_Name,
            Last_Name: req.body.Last_Name,
            Email: req.body.Email,
            Password: req.body.Password,
            role: req.body.role,
        };
        
        if (Admin_data.role == "admin_role"){
            console.log("working");
              let Data = await knex("admin_registration").insert(Admin_data);

              res.json({
                Account: Data,
                mesg: "Your Admin_Account Is Create Succesfully...!",
              });
              console.log("Your Admin_Account Is Create Succesfully...!");
            }
          }
  } catch (error) {
    console.log(error);
  }
};

// ======================>Login_Page<=====================================//

const Admin_Login = async (req, res) => {

  const { Email, password } = req.body;
  try {
    // console.log("dfghj");
    const info = await knex("admin_registration").where({Email:Email});
    // console.log(info[0].Email);
    if(info){
        if(info[0].password==password ){
            if(info[0].role=="admin_role"){
                let Token=GenrateToken(info[0].id);
                res.cookie("Admin",Token).send("Admin_login");

            }else{
                res.send({mesg:"You are not allowed to login from here"})
                console.log("You are not allowed to login from here");
            }
            

        }
    }
    
  } catch (error) {}
};


module.exports = {
  CustomerRegistration,
  AdminRegistrations,
  Admin_Login 
};
