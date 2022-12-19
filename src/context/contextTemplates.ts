import { createContext, useCallback, useState } from "react";
import { createContextEnviroment, createDefaultContextEnviroment, IContextEnviroment } from ".";
import { ITemplateDirectoryNode } from "../types";

export const templatesNodeContext = createContext<IContextEnviroment<ITemplateDirectoryNode>>(createDefaultContextEnviroment<ITemplateDirectoryNode>());
export const useContextTemplateNode = () : IContextEnviroment<ITemplateDirectoryNode> => createContextEnviroment<ITemplateDirectoryNode>();

export interface typeAAA
{
    a : string,

    b : {
        a: string,
    }
};

export const testContext = createContext<IContextEnviroment<typeAAA>>(createDefaultContextEnviroment<typeAAA>());

export const useTestContext = () : IContextEnviroment<typeAAA> => createContextEnviroment<typeAAA>(    {
    a: "test",

    b: 
    {
        a: "c",
    }
});

