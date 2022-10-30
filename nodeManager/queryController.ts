import * as controller from './controller';
import path from 'path';

enum GETQueryTypes {
	info = 'info',
  time = 'time',
} 

enum POSTQueryTypes {
	status = 'status',
	init = 'init',
	fault = 'fault',
}

function check(path: unknown) {
	
}