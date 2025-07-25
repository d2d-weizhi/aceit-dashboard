import { makeObservable } from "mobx";

class AceItStore {
	constructor() {
		makeObservable(this);
	}
}

let store: AceItStore;
export const initializeStore = () => {
	const _store = store ?? new AceItStore();
	if (typeof window === "undefined") return _store;
	if (!store) store = _store;
	return _store;
}