import { TypedUseSelectorHook, useSelector } from "react-redux";

import type { RootState } from "@Redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
