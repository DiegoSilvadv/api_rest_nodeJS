const express = require('express');
const app = express();

app.use(express.json());

const AddressController = require('./controllers/Controlleraddress')

app.get('/address', AddressController.show);
app.get('/address/:id', AddressController.showById);
app.put('/address/:id', AddressController.update);
app.delete('/address/:id', AddressController.delete);
app.post('/address', AddressController.store);

app.listen(3333, ()=>{
    console.log("api rodando na porta 3333")
})