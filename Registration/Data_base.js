let knex=require("knex")({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        database:"Techerudite_project",
        password:"raja@123"
    }
})
// first table.
knex.schema.createTable("customer_servise",(Table)=>{
    Table.increments("id").primary()
    Table.string("First_Name")
    Table.string("Last_Name")
    Table.string("Email")
    Table.string("Password")
    Table.string("role")

}).then(()=>{
    console.log("yes","dfghj");
}).catch(()=>{
    console.log("Table is allready exist");
})

// second table..
knex.schema.createTable("admin_registration",(Table)=>{
    Table.increments("id").primary()
    Table.string("First_Name")
    Table.string("Last_Name")
    Table.string("Email")
    Table.string("Password")
    Table.string("role")

}).then(()=>{
    // console.log("yes");
}).catch(()=>{
    // console.log("Table is allready exist");
})
module.exports=knex