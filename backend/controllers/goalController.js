const getGoals = (req,res)=>{
    res.status(200).json({message: "Get Goals"})
}

const setGoals = (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: "Set Goals"})
}

const updateGoals = (req,res)=>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

const deleteGoals = (req,res)=>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}