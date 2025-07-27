'use client';

import { createContext, useContext, ReactNode, useState } from "react";
import { AceItStore, initializeStore } from "@/stores/aceit-store";

const StoreContext = createContext<AceItStore | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
	const [store] = useState(() => {
		return initializeStore();
	});

	return (
		<StoreContext.Provider value={store}>
			{children}
		</StoreContext.Provider>
	);
}

export const useStore = () => {
	const store = useContext(StoreContext);
	if (!store) {
		throw new Error("useStore must be used within a StoreProvider.");
	}
	return store;
};