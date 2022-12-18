import { storeTemplates } from "../loader/LoaderTemplates";

export interface Store
{
    templateStore : storeTemplates
}

export interface ITemplateNode
{
    name: string;
    nodeType?: string;
}

export interface ITemplateDirectoryNode extends ITemplateNode
{
    children?: ITemplateNode[];
}

export interface ITemplateContentNode extends ITemplateNode
{
    content : string;
}
