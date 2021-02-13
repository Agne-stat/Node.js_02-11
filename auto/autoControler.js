const Auto = require('./autoModel')

// sukurti objekta
saveModel = async (req, res) => {

    let auto = new Auto(req.body)

    try {
        let savedModel = await auto.save()
        res.json(savedModel)
    } catch(e) {
        res.status(400).json(e)
    }
}

getModel = async(req, res) => {
    Auto.find({}, (items, err) => {
        if (err) return res.json(err)
        res.json(items)
    })
};


//gauti viena objekta pagal id ir ji istrinti
deleteModelbyId = async(req, res) => {
    Auto.deleteOne({_id: req.body._id}, function(err) {
        if (err) return res.json(err)
        res.json("deleted")
    })
};


// filtruoti pagal: rida (max, min)
filterByMileage = async(req, res) => {
    try {
        let filtered = await Auto.find({
            mileage: req.body.mileage
        })
        // if (req.body.mileage) {
        //     return req.body.mileage <= filtered 
        // }
        res.json(filtered)
    } catch(err) {
        res.status(400).json(err)
    }
}

// filtruoti pagal: metus (max, min)
filterByYear = async(req, res) => {
    try {
        let filtered = await Auto.find({
            year: req.body.year
        })
        res.json(filtered)
    } catch(err) {
        res.status(400).json(err)
    }
}

// filtruoti pagal: pavaru deze 
filterByGearbox = async(req, res) => {
    try {
        let filtered = await Auto.find({
            gearbox: req.body.gearbox
        })
        res.json(filtered)
    } catch(err) {
        res.status(400).json(err)
    }
}

// rikiuoti pagal: metus


// rikiuoti pagal: pavadinima

// rikiuoti pagal: rida

// sortByMileage = async(req, res) => {
//     try {
//         let filtered = await Auto.find({
//             mileage: req.body.mileage
//         }).sort({mileage: -1})
//         res.json(filtered)
//     } catch(err) {
//         res.status(400).json(err)
//     }
// }

module.exports = {
    saveModel,
    getModel,
    deleteModelbyId,
    filterByMileage,
    filterByYear,
    filterByGearbox,
    // sortByMileage
}