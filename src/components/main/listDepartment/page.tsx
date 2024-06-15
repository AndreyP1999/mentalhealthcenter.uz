
import { ListDepartmentComponent } from "@/interface/local/main/listDepartmentComponents";
import Headings from "@/UI/headings/Headings";
import ItemDepartment from "./item/itemDepartment";
import { PrismaClient } from "@prisma/client";
import { prismaGetListDepartment } from "@/helpers/prisma/prismaGetListDepartment";
import { ComponentInDevelopment } from "@/components/ComponentInDevelopment/page";
const prisma = new PrismaClient();


async function ListDepartment({ localizate, lang }: { localizate: ListDepartmentComponent, lang: "ru" | "uz" | "en" }) {
    const listDepartment = await prismaGetListDepartment(lang);

    return (
        <section className="my-5 Open_Sans container mx-auto">
            <Headings level={2} text={localizate?.titie} />
            <ComponentInDevelopment>
                <ol className="flex flex-col gap-10" id="listDepartment">
                    {listDepartment.map((department, index) => (
                        <ItemDepartment
                            key={department.id_departments}
                            name={department.title} id={department.id_departments}
                            childrenDivisions={department.Divisions} />
                    )
                    )}
                </ol>
            </ComponentInDevelopment>

        </section>
    );
}

export default ListDepartment;