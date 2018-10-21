import * as mongoose from 'mongoose';

import app from './App';

const PORT = Number(process.env.PORT) || 8080;
const DBURI = 'mongodb://localhost:27017';

app.listen(PORT, async () => {
    await mongoose.connect(
        DBURI,
        { useNewUrlParser: true},
    )
    .catch((err) => {
        throw err;
    });
});
