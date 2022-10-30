import uuidv4 from 'uuid';
import fs from 'fs';
import path from 'path';

const nodeList = 'nodeList.json'

if (fs.existsSync(nodeList)) {
	console.log('found NodeList');
} else {
	console.log('could not find the nodelist creating one');
}


function addNode(nodeid: string, data: string) {
	
}

function deleteNode(nodeid: string, data: string) {
	
}

function getNode(nodeid: string) {
	
}

function listNodes() {
	
}


