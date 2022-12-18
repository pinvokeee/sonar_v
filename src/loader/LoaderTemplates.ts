import { ITemplateContentNode, ITemplateDirectoryNode, ITemplateNode } from "../types";

export class LoaderTemplates
{
    constructor()
    {
    }
    
    private createDirectoryNode(name : string) : ITemplateDirectoryNode
    {
        return {
            name : name,
            nodeType: "directory",
            children: []
        };
    } 

    private createContentNode(name : string) : ITemplateContentNode
    {
        return {
            name : name,
            nodeType: "content",
            content: "",
        };
    } 

    /**
     * 渡されたディレクトリハンドルから読み込んだノードツリーを返す
     * @param handle 
     * @returns 
     */
    async loadFromDirectoryHandle(handle : FileSystemDirectoryHandle)
    {
        const topNode : ITemplateDirectoryNode = this.createDirectoryNode("top");

        return new Promise(async (resolve : (resultNode : ITemplateDirectoryNode) => void, reject) =>
        {
            await this.callLoadFromDirectoryHandle(handle, topNode);
            resolve(topNode as ITemplateDirectoryNode);
        });
    }

    /**
     * loadFromDirectoryHandleの再帰関数（何をしているかわかりやすくするために分割）
     * @param handle 
     * @param parentNode 
     */
    async callLoadFromDirectoryHandle(handle : FileSystemDirectoryHandle, parentNode : ITemplateDirectoryNode)
    {
        for await (const [name, value] of handle.entries())
        {    
            if (value.kind == "directory")
            {
                const newNode : ITemplateDirectoryNode = this.createDirectoryNode(name);                    
                parentNode.children?.push(newNode);
                await this.callLoadFromDirectoryHandle(value, newNode);
            }
            else
            {
                const newNode : ITemplateContentNode = this.createContentNode(name);
                newNode.content = await (await value.getFile()).text();
                parentNode.children?.push(newNode);
            }
        }
    }
}