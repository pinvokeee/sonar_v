import { createContext, useCallback, useState } from "react";
import { ITemplateDirectoryNode } from "../types";

//コンテキスト型→継承したカスタムフック→

export interface IContextTemplatesNode
{
    node : ITemplateDirectoryNode,
    setNode : (n : ITemplateDirectoryNode) => void;
}

export const defaultContextTemplatesNode : IContextTemplatesNode = 
{
    node : { name: "ttt" },
    setNode : () => {} 
}

export const templatesNodeContext = createContext<IContextTemplatesNode>(defaultContextTemplatesNode);

export const useContextTemplateNode = () : IContextTemplatesNode =>
{
    const [node, setNode] = useState({ name: "" });
    
    return {
        node, 
        setNode
    }
}
