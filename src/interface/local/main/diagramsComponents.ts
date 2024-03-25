export interface DiagramsComponents {
    title: string,
    content: {
        Nodes: Array<{
            id: string
            title: string,
            subtitle: string,
            position: {
                x: number,
                y: number,
            }
        }>
        Edges: Array<{ id: string, type: "step" | "smoothstep" | "default" | "straight", source: string, target: string }>
    }
}