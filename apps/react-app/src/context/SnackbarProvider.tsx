import React, { createContext } from "react";
interface Props {
    children: React.JSX.Element;
}
interface SnackBarContextProps {
    createAlert: (severity: string, message: string) => void
}
export const SnackbarContext = createContext<SnackBarContextProps>({
    createAlert: () => {}
});
export function SnackbarProvider ( { children } : Props ) {
    const createAlert = (severity: string, message: string) => {
        console.log(severity, message)
    }
    return (
        <SnackbarContext.Provider
            value = {{
                createAlert
            }}
        >
            { children }
        </SnackbarContext.Provider>
    );
}