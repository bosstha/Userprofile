const userProfile = require('./db');

module.exports = (app) => {

    app.get('/main', (req, res) => {
        userProfile.find((err, user) =>{

            if (err){
                res.send('incomplete data');
            }else {
                 res.send({
                     data:user,

                 });
            };
        });
    });
    app.post('/main', (req, res) =>{
        let profileObject = req.body;
        const newProfile = new userProfile(profileObject);
        const userData = {
            Fullname:req.body.Fullname,
            Email:req.body.Email,
            Age: req.body.Age,
            DOB: req.body.DOB,
            Height:req.body.Height,
            income: req.body.income,
            monthly_cost:req.body.cost
        };
        // let profileObject = req.body;
        // const newProfile = new userData(profileObject);
        // console.log(profileObject);

        newProfile.save((err, User) =>{
        if (err){
            res.send ('error found');
        }else {
            res.send('/main');
        }
        2

       });

    });
}