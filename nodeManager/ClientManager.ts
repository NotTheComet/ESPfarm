import {v4 as uuidV4} from 'uuid';
import { Vault } from '@ultimate/vault';

const localStorage = new Vault({ type: 'local' });

interface node {
	id: string;
	ip: string;
	name: string;
}

function AddNode(node: node) {
	const id = uuidV4();
	localStorage.setItem(id, JSON.Stringify())
	
	
}