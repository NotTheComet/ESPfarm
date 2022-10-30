import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export function getServerConfig() {
	let configPath = path.join(__dirname, 'config.json');
	if (fs.existsSync(configPath)) {
		fs.readFile(configPath, {encoding:'utf8', flag:'r'}, (err, data) => {
    	if (err) throw err;
    	let config = JSON.parse(data);

			return config;
		});
	} else {
		throw "could not find config file atempting to create one";
	}
	
}

export default {
	version: process.env.SERVER_VERSION,
  serverName: process.env.SERVER_NAME || 'localhost',
  port: process.env.PORT || 5642,
}

