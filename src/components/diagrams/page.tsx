'use client'
import { createNodes } from "@/helpers/writeDiagram";
import { DiagramsComponents } from "@/interface/local/main/diagramsComponents";
import { Nodes } from "@/interface/nodeInterface";
import { useEffect, useState } from "react";
import ReactFlow, {
    Edge,
    useStoreApi,
    useReactFlow,
    MiniMap,
    Controls,
    Background,
    ControlButton,
    BackgroundVariant
} from "reactflow";
import 'reactflow/dist/style.css';


function Diagrams({ lng, localizate }: { lng: "ru" | "uz" | "en", localizate: DiagramsComponents }) {

    const [nodes, setNodes] = useState<Nodes[]>([]);
    const [edges, setEdges] = useState([]);
    const GetDataForDiagrams = async (lng: "ru" | "uz" | "en") => {
        try {
            const [EdgesRes, NodesRes] = await Promise.all([
                fetch("/json/Edges.json"),
                fetch("/json/" + lng + "/Nodes.json")
            ])

            if (!EdgesRes.ok || !NodesRes.ok) {
                throw new Error('Ошибка получения данных');
            }
            const [Edges, Nodes] = await Promise.all([
                EdgesRes.json(),
                NodesRes.json()
            ])
            // console.log(Edges, Nodes)

            setNodes(createNodes(Nodes))
            setEdges(Edges)
        }
        catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        GetDataForDiagrams(lng)
    }, [])


    return (

        <section className="flowchat mt-5 relative  overflow-hidden">
            <div className="  container mx-auto aspect-video my-5 flex flex-col gap-14">
                <h1 className="font-bold text-xl text-black uppercase text-center sm:text-2xl lg:text-4xl">flowchart</h1>
                <div className="container h-2/3  bg-white border border-black shadow-lg">
                    <ReactFlow nodes={nodes} edges={edges} fitView>
                        {/* <Background id="1" gap={10} color="#f1f1f1" variant={BackgroundVariant.Lines} /> */}
                        <Background id="2" gap={100} offset={1} color="#ccc" variant={BackgroundVariant.Lines} />
                        <Controls>
                        </Controls>
                        <MiniMap nodeStrokeWidth={3} zoomable pannable />
                    </ReactFlow>
                </div>

            </div>
            <div style={{ clipPath: "circle(73.4% at 50% 87%" }} className="absolute -z-10 top-5  bg-blue-600 w-full  aspect-square"></div>
        </section>
    );


}

export default Diagrams;