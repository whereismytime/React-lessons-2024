import { createContext } from "react";

export const CardsContext = createContext([]);

export default function CardsContextProvider({ value, children }) {
	return (
		<CardsContext.Provider value={value}>{children}</CardsContext.Provider>
	);
}
