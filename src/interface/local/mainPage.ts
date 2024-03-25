import { BannerComponent } from "./main/bannerComponents"
import { DiagramsComponents } from "./main/diagramsComponents"
import { FooterComponent } from "./footerComponent"
import { HeaderComponent } from "./headerComponent"
import { ListDepartmentComponent } from "./main/listDepartmentComponents"

export interface MainPage {
    head: {
        title: string,
        description: string,
        keywords: string,
    }
    header: HeaderComponent
    banner: BannerComponent,
    listDepartment: ListDepartmentComponent,
    diagrams: DiagramsComponents
    footer: FooterComponent
}