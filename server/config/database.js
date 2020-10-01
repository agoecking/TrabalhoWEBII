const mongoose = require('mongoose');
const db = mongoose.connect("mongodb+srv://TrabalhoWEBII:webii@trabalhowebii.mzhc1.gcp.mongodb.net/TrabalhoWEBII?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => 
{
    console.log("Conexão estabelecida com o banco de dados.")
});

mongoose.connection.on("error", (error) => 
{
    console.log(`Erro aconteceu. \n${error}`);
});

mongoose.connection.on("disconnected", () => 
{
    console.log("Desconectado com o banco de dados.")
});

module.exports = db;