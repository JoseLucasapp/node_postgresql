const Model = require('./database/model');

const create = async(data)=>{
    await Model.create({
        name: data.name,
        age: data.age
    });

    return 'Created';
}

const readAll = async()=>{
    return await Model.findAll();
}

const readOne = async(id)=>{
    return await Model.findByPk(id) || 'Not found';
}

const update = async(id, data)=>{
    const Data = await Model.findByPk(id);
    const keys = Object.keys(data);
    keys.map((k)=>{
        Data[k] = data[k]
    })

    await Data.save();
    return 'Updated';
}

const remove = async(id)=>{
    await Model.destroy({ where:{id: id}});
    return 'Deleted';
}

module.exports = { create, readAll, readOne, update, remove }