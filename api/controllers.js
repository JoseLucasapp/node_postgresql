const {create, readAll, readOne, update, remove} = require('./models');

module.exports.create = async (req, res)=>{
    try{
        const data = await create(req.body);
        res.status(200).json({msg: data})
    }catch(err){
        res.status(500).json({error: err});
    }
}

module.exports.readAll = async (req, res)=>{
    try{
        const data = await readAll();
        res.status(200).json({data})
    }catch(err){
        res.status(500).json({error: err});
    }
}

module.exports.readOne = async (req, res)=>{
    try{
        const data = await readOne(req.params.id);
        res.status(200).json({data})
    }catch(err){
        res.status(500).json({error: err});
    }
}

module.exports.update = async (req, res)=>{
    try{
        const data = await update(req.params.id, req.body);
        res.status(200).json({msg:data})
    }catch(err){
        res.status(500).json({error: err});
    }
}

module.exports.remove = async (req, res)=>{
    try{
        const data = await remove(req.params.id);
        res.status(200).json({msg:data})
    }catch(err){
        res.status(500).json({error: err});
    }
}

