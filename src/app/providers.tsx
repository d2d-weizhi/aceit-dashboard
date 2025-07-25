'use client';

import { createContext, useContext, ReactNode } from "react";
import { initializeStore } from "@/stores/aceit-store";

const StoreContext = createContext(initializeStore());

export const StoreProvider = ({ children }: { children: ReactNode }) => {
	return (
		<StoreContext.Provider value={initializeStore()}>
			{children}
		</StoreContext.Provider>
	);
}

export const useStore = () => useContext(StoreContext);