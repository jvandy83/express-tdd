import app from './src/app.js';

import sequelize from './src/config/database.js';

sequelize.sync();

app.listen(3000, () => console.log('App running on port 3000'));
