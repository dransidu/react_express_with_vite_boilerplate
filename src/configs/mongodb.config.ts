import mongoose from 'mongoose'

export default class MongoDB {
    getConnection() {
        return mongoose.connect('mongodb://127.0.0.1:27017/bugcms')
            .then(() => console.log(`Database connection success!`))
            .catch((err) => console.log(`Database connection faild ${err}`));
    }
}