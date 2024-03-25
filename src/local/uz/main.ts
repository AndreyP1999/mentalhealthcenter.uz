import { MainPage } from "@/interface/local/mainPage";




export const localizationMainPageUZ: MainPage = {
    head: {
        title: "string UZ",
        description: "string UZ",
        keywords: "string UZ",
    },
    header: {
        Main: "Асосий",
        Branches: "Филиаллар",
        Patients: "Беморлар учун",
        Specialists: "Мутахассислар",
        lang: "en",
    },
    banner: {
        freeSeats: "Касалхонада мавжуд жойлар сони",
        phoneNumber: "telefon рақами",
        send: "юбориш",
        titie: "Тескари алоқа",
    },
    diagrams: {
        title: "FLOWCHART",
        content: {
            Nodes: [
                {
                    id: "1",
                    title: "директор",
                    subtitle: "Холов Жахон Истамович",
                    position: { x: 0, y: 0 }

                },
                {
                    id: "2",
                    title: "Директор Ўринбосари",
                    subtitle: "Холов Жахон Истамович",
                    position: { x: 300, y: 320 }
                },
                {
                    id: "3",
                    title: "Директор Ўринбосари",
                    subtitle: "Холов Жахон Истамович",
                    position: { x: -300, y: 320 }
                },
                {
                    id: "4",
                    title: "Отделения -1",
                    subtitle: "Lorem ipsum dolor sit amet consectetur.",
                    position: { x: -150, y: 640 }
                },
                {
                    id: "5",
                    title: "Отделения -2",
                    subtitle: "Lorem ipsum dolor sit amet consectetur.",
                    position: { x: -450, y: 640 }
                },
            ],
            Edges: [
                { id: "e1-2", type: "step", source: "1", target: "2" },
                { id: "e1-3", type: "step", source: "1", target: "3" },
                { id: "e3-4", type: "step", source: "3", target: "4" },
                { id: "e3-5", type: "step", source: "3", target: "5" },
            ]
        }
    },
    listDepartment: {
        titie: "THE STRUCTURE OF THE INSTITUTION",

    },
    footer: {
        title: "Республика ихтисослаштирилган наркология илмий-амалий тиббиёт маркази",
        address: "Манзил:",
        contacts: {
            title: "Алоқалар",
            appeals: "Дирекция -  Ашуров Зарифжон Шарифович",
            department: "Қабул бўлими - 99871-200-02-88",
            directorate: "даволаш тартиби ҳақида маълумот",
            email: "email - info@narcomedcenter.uz",
            hours: "telefon - 99871-200-02-88",
            passage: "қабул соатлари - 8:00-21:00",
            phone: "саёҳат ҳақида маълумот - 102147, Tashkent region, Qibray district, Salar village, Orom str., 1",
        }
    }
}