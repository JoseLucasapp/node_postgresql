const controller = require('./controllers');

module.exports = (router)=>{
    router.post('/', controller.create);
    router.get('/', controller.readAll);
    router.get('/:id', controller.readOne);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.remove);
}