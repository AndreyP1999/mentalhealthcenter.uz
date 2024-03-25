import { FooterComponent } from "./footerComponent"
import { HeaderComponent } from "./headerComponent"

export interface BranchesPage {
    header: HeaderComponent
    title: "string",
    table: {
        header: {
            id: string,
            name: string,
            address: string,
            contacnts: string,
            doctor: string,
        }
    },
    footer: FooterComponent
}