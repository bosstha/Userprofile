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

        newProfile.save((err, User) =>{
        if (err){
            res.send ('error found '+err);
        }else {
            res.send({
                data: userData
            });
        }
        

       });

    });
    app.put('/main/:id', (req, res) =>{
        const id = req.params.id;
        let profileObject = req.body;
        // console.log(id);
        // res.send(id);

        userProfile.where({ _id: id }).update(profileObject).exec((err, detail) => {
            if(err){
                res.send(`Error Updating Users Profile \n${err}`);
            }else{
                res.send({
                    // message:message("put","Lecturer"),
                    data: detail
                });
            }
        }) ;

    });
    app.delete('/main/:id', (req, res) =>{
        const id = req.params.id;
        let profileObject = req.body;
        // console.log(id);
        // res.send(id);

        userProfile.where({ _id: id }).remove().exec((err, detail) => {
            if(err){
                res.send(`Error Updating Users Profile \n${err}`);
            }else{
                res.send({
                    // message:message("put","Lecturer"),
                    data: detail
                });
            }
        }) ;

    });
}