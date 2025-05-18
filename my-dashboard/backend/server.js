const express = require('express');
const cors = require('cors');

const empleadosRoutes = require('./routes/empleados');
const clientesRoutes = require('./routes/clientes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/empleados', empleadosRoutes);
app.use('/clientes', clientesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
