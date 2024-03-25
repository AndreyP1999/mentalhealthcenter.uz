import { DiagramsComponents } from "@/interface/local/main/diagramsComponents"
import Link from "next/link"

interface Nodes {
    id: string,
    type?: string,
    data: {
        label: JSX.Element
    },
    position: { x: number, y: number }
};
export const createNodes = (localizate: DiagramsComponents): Nodes[] => {
    const res: Nodes[] = []


    for (let i = 0; i < localizate?.content?.Nodes?.length; i++) {
        res.push(
            {
                id: localizate.content.Nodes[i].id,
               
                // you can also pass a React component as a label 
                data: {
                    label: (
                        <Link className="box-1" href="#" >
                            <p className="uppercase font-bold">{localizate.content.Nodes[i].title}</p>
                            <p className="font-normal italic">{localizate.content.Nodes[i].subtitle}</p>
                        </Link>
                    )
                },
                position: localizate.content.Nodes[i].position
            }
        )

    }
    return res;
}