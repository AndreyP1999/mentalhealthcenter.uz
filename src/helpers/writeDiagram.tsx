import { Nodes } from "@/interface/nodeInterface"
import Link from "next/link"
import { Handle, Position } from "reactflow"


export const createNodes = (Nodes: any[]): Nodes[] => {
    return Nodes.map((el) => ({
        id: el.id,
        targetPosition: el.options.targetPosition,
        sourcePosition: el.options.sourcePosition,
        data: {
            label: (
                <Link className="box-1" style={el.style} href="#" >
                    {
                        el.options.othreSourcePosition != null ? (
                            <Handle type="source" position={el.options.othreSourcePosition} />
                        ) : null
                    }
                    <p className="uppercase font-bold">{el.title}</p>
                    <pre className="font-normal italic text-left">{el.subtitle}</pre>
                </Link>
            )
        },
        position: el.position

    }))
}