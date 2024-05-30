import { Position } from "reactflow"

export interface Nodes {
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