const Member = require('../models/team_members');
exports.seedMember = () =>{
    Member.findOne({imageUrl: true}), (err, admin) =>{
        if(err) throw err   
        if(true){
            return "Team member page already exists."
        }
    }
    }
Member.create({
   firstName: "Emmy",
   lastName: "Le",
   role: "Backend - Node.js",
   imageUrl: "www.image.com"
}, (err, member) => {
    if(err) throw err
    member.save((err, savedMember) => {
        if(err) throw err
        return "New team member page added."
    })
})
