import Mongoose, { ConnectOptions } from 'mongoose';
import makeCelebrityModel from './celebrity';

Mongoose.connect(`${process.env.NEXT_PUBLIC_MONGO_URL}`, {
	useNewUrlParser: true,
} as ConnectOptions);

const celebsModel = makeCelebrityModel(Mongoose);

export { celebsModel };
