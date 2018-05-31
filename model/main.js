const userProfile=require('../model/main');

module.export=(app) => {

    app.get('/main', (req, res) => {
        newProfile.create((err, User) =>{
            // const userData = {
            //     Fullname:req.body.Fullname,
            //     Email:req.body.Email,
            //     Age: req.body.Age,
            //     DOB: req.body.DOB,
            //     Height:req.body.Height,
            //     income: req.body.income,
            //     monthly_cost:req.body.cost
            // };
            if (err){
                res.send('incomplete data');
            }else {
                 res.send({
                     data:userData,

                 });
            };
        });
    });
    app.post('/main', (req, res) =>{
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

       newProfile.create(userData, (err, User) =>{
        if (err){
            return next(err);
        }else {
            return res.redirect('/User');
        }

       });

    });
}