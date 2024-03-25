import { Departments, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const prismaGetListDepartment = async (lang: "ru" | "en" | "uz") => {
    try {
        const data = await prisma.departments.findMany({
            select: {
                id_departments: true,
                title_en: true,
                title_ru: true,
                title_uz: true,
                Divisions: {
                    select: {
                        id_divisions: true,
                        title_ru: true,
                        title_uz: true,
                        title_en: true,
                    }
                }
            },
            orderBy: {
                id_departments: "asc",
            },
        });

        switch (lang) {
            case "en":
                return data.map((department) => ({
                    id_departments: department.id_departments,
                    title: department.title_en,
                    Divisions: department.Divisions.map(division => ({
                        id_divisions: division.id_divisions,
                        title: division.title_en,
                    }))
                }))

            case "uz":
                return data.map((department) => ({
                    id_departments: department.id_departments,
                    title: department.title_uz,
                    Divisions: department.Divisions.map(division => ({
                        id_divisions: division.id_divisions,
                        title: division.title_uz,
                    }))
                }))
            case "ru":
                return data.map((department) => ({
                    id_departments: department.id_departments,
                    title: department.title_ru,
                    Divisions: department.Divisions.map(division => ({
                        id_divisions: division.id_divisions,
                        title: division.title_ru,
                    }))
                }))
            default:
                return []
        }

    }
    catch (error) {
        console.log(error);
        return []
    }

}
