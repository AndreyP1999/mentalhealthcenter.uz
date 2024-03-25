
export function generateHTML(mainContent: string, settingForHead: ForHead) {
    return writehead(settingForHead) + `<body>${mainContent}</body>`
}
export interface ForHead {
    title: string;
    desc: string;
    keyword: string;
}

const writehead = (settingForHead: ForHead): string => {
    return `<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${settingForHead.title}</title>
        <meta name="description" content="${settingForHead.desc}">
        <meta name="keywords" content="${settingForHead.keyword}">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
        pre {
            white-space: pre-wrap;      
            white-space: -moz-pre-wrap; 
            white-space: -pre-wrap;     
            white-space: -o-pre-wrap; 
            word-wrap: break-word;    
         }
        </style>
    </head>`
}
