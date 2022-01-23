import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { createContext } from "react";
import { CssBaseline } from "@material-ui/core";

const TemplateContext = createContext(null);

export const TemplateProvider =({ children })=>{
    const theme= createTheme({
        overrides:{
            MuiPaper:{
               root:{
                   backgroundColor:"ffffff !important"
               }
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': {
                        paddingTop: 0
                    }
                }
            },
            MuiTableCell: {
                root:{
                    borderBottom: "none"
                }
            },
            MuiDrawer:{
                paperAnchorTop:{
                    background:"#0f171e !important",
                    color:"#fff  !important"
                }
            },
         
    }

    });

    return(
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
            <CssBaseline />
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider;