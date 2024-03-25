import { MainPage } from "@/interface/local/mainPage";




export const localizationMainPageEN: MainPage = {
    head: {
        title: "Republican Specialized Scientific-Practical Medical Center of Narcology",
        description: "The Republican Specialized Medical Center of Narcology provides specialized treatment and research in the field of drug and alcohol addiction, offering detoxification, rehabilitation, counseling and therapy services in Uzbekistan.",
        keywords: "Narcology, Treatment of drug addiction, Rehabilitation of drug addicts, Detoxification from alcohol, Medical center, Detoxification services, Rehabilitation therapy, Treatment of substance abuse, Addiction counseling, Specialized medical care",
    },
    header: {
        Main: "Main",
        Branches: "Branches",
        Patients: "Patients",
        Specialists: "Specialists",
        lang:"en",
    },
    banner: {
        freeSeats: "Number of available places in the hospital",
        phoneNumber: "phone num.",
        send: "send",
        titie: "Feedback",
    },
    diagrams: {
        title: "FLOWCHART",
        content: {
            Nodes: [
                {
                    id: "1",
                    title: "director",
                    subtitle: "Kholov Zhakhon Istamovich",
                    position: { x: 0, y: 0 }

                },
                {
                    id: "2",
                    title: "",
                    subtitle: "Kholov Zhakhon Istamovich",
                    position: { x: 300, y: 320 }
                },
                {
                    id: "3",
                    title: "Deputy Director",
                    subtitle: "Kholov Zhakhon Istamovich",
                    position: { x: -300, y: 320 }
                },
                {
                    id: "4",
                    title: "Departments -1",
                    subtitle: "Lorem ipsum dolor sit amet consectetur.",
                    position: { x: -150, y: 640 }
                },
                {
                    id: "5",
                    title: "Departments -1",
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
        titie: "STRUCTURE OF THE INSTITUTION",

    },
    footer: {
        title: "Republican Specialized Scientific and Practical Medical Center of Narcology",
        address: "Address:",
        contacts: {
            title: "Contacts",
            appeals: "directorate - Ashurov Zarifjon Sharifovich",
            department: "reception department - 99871-200-02-88",
            directorate: "information about the order of treatment",
            email: "email -  info@narcomedcenter.uz",
            hours: "phone - 99871-200-02-88",
            passage: "reception hours - 8:00-21:00",
            phone: "travel information - 102147, 102147, Khana Street, Sun Village, Qibray district, Tashkent region., 1",
        }
    }
}