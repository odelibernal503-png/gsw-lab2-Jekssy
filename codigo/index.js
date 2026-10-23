const express = require('express');
const app = express();
const PORT = 9090;

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || 'mundo';
    res.json({ mensaje: 'Hola, ' + nombre, desde: 'dulcehogar:9090' });
});

app.get('/pedido', (req, res) => {
    const { producto, cantidad } = req.query;
    res.json({
        pedidoId: 'PED-' + Date.now(),
        producto,
        cantidad,
        estado: 'recibido'
    });
});

app.listen(PORT, () => {
    console.log('[dulcehogar.api] http://localhost:' + PORT);
});
