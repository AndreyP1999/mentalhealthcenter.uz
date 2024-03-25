import { MainPage } from "@/interface/local/mainPage";




export const localizationMainPageRU: MainPage = {
    head: {
        title: "Республиканский специализированный научно-практический медицинский центр наркологии",
        description: "Республиканский специализированный медицинский центр наркологии предоставляет специализированное лечение и исследования в области наркотической и алкогольной зависимости, предлагая услуги по детоксикации, реабилитации, консультированию и терапии в Узбекистане.",
        keywords: "Наркология, Лечение наркомании, Реабилитация наркоманов, Детоксикация от алкоголя, Медицинский центр, Услуги по детоксикации, Восстановительная терапия, Лечение от токсикомании, Консультирование по вопросам зависимости, Специализированная медицинская помощь",
    },
    header: {
        Main: "Главная",
        Branches: "Филиалы",
        Patients: "Пациентам",
        Specialists: "Специалистам",
        lang: "ru",

    },
    banner: {
        freeSeats: "Количество свободных мест в стационаре",
        phoneNumber: "номер тел.",
        send: "отправить",
        titie: "Обратная Связь",
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
                    title: "Зам. Директора",
                    subtitle: "Холов Жахон Истамович",
                    position: { x: 300, y: 320 }
                },
                {
                    id: "3",
                    title: "Зам. Директора",
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
    }
    ,
    listDepartment: {
        titie: "СТРУКТУРА УЧРЕЖДЕНИЯ",

    },
    footer: {
        title: "Республиканский специализированный научно-практический медицинский центр наркологии",
        address: "Адрес: ",
        contacts: {
            title: "Контакты",
            appeals: "дирекция - Ашуров Зарифжон Шарифович",
            department: "приемное отделение - 99871-200-02-88",
            directorate: "информация о порядке обращения",
            email: "email -  info@narcomedcenter.uz",
            hours: "телефон - 99871-200-02-88",
            passage: "часы приема - 8:00-21:00",
            phone: "информация о проезде - Ташкентская область, Кибрайский район, село Солнечное, ул. Комнатная, ",
        }
    }
}