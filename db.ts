import * fs from 'fs';
import * path from 'path';

const configPath = '';

function getConfig(configPath: string) {
	fs.readFile(configPath, (err, data) => {
    if (err) throw err;
    let config = JSON.parse(data);

		
	});
}