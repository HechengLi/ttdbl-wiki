let data = new Object();

export default class Actives {
	static storeKeyValue(key, value) {
		data[key] = value;
	}

	static getValueForKey(key) {
		return data[key];
	}
}
