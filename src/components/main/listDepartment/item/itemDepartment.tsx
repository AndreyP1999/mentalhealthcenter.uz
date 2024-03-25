import { ListDepartmentComponent } from "@/interface/local/main/listDepartmentComponents";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
import { Departments, Divisions } from "@prisma/client";

function ItemDepartment({ name, id, childrenDivisions }: {
    name: string,
    id: number,
    childrenDivisions: {
        id_divisions: number;
        title: string;
    }[]
}) {

    return (
        <li key={id}>
            <div className="flex flex-col gap-5 ">
                <label className={style.dropMenu__title} data-nav-id={`department_${id}`}>
                    {name}
                </label>
                <nav className={style.my_grid} data-nav={`department_${id}`}>
                    {childrenDivisions.map(divisions => {
                        return (
                            <Link key={divisions.id_divisions} className={style.item} href="#">
                                <span className="IBM_Plex_Sans">{divisions.title}</span>
                                <Image className="self-end" src="/image/arrowLeft.svg" alt="arrowLeft" width={64} height={64} />
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </li>
    );
}

export default ItemDepartment;