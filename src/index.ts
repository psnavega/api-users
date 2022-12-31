import 'dotenv/config';
import app from './app/index';

const {PORT} = process.env;

app.listen(PORT, () => {
	console.log(`listening port ${PORT}`);
});