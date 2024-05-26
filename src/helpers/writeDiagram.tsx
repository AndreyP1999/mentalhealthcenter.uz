import { DiagramsComponents } from "@/interface/local/main/diagramsComponents"
import Link from "next/link"
import { Handle, Position } from "reactflow"

interface Nodes {
    id: string,
    type?: string,
    targetPosition: Position,
    sourcePosition: Position,
    othreSourcePosition?: Position[],
    data: {
        label: JSX.Element
    },
    position: { x: number, y: number }
};
export const createNodes = (Nodes: any[]): Nodes[] => {
    const res: Nodes[] = []


    for (let i = 0; i < Nodes.length; i++) {
        res.push(
            {
                id: Nodes[i].id,
                targetPosition: Nodes[i].options.targetPosition,
                sourcePosition: Position.Left,
                // you can also pass a React component as a label 
                data: {
                    label: (
                        <Link className="box-1" style={Nodes[i].style} href="#" >
                            <p className="uppercase font-bold">{Nodes[i].title}</p>
                            <pre className="font-normal italic text-left">{Nodes[i].subtitle}</pre>
                        </Link>
                    )
                },
                position: Nodes[i].position
            }
        )

    }
    return res;
}