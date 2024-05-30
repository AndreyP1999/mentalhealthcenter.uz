import { BannerComponent } from "./main/bannerComponents"
import { DiagramsComponents } from "./main/diagramsComponents"
import { FooterComponent } from "./footerComponent"
import { HeaderComponent } from "./headerComponent"
import { ListDepartmentComponent } from "./main/listDepartmentComponents"
import { head } from "../head"

export interface MainPage {
    head: head,
    banner: BannerComponent,
    listDepartment: ListDepartmentComponent,
    diagrams: DiagramsComponents,

}