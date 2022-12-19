import styled from "@emotion/styled/types/base";
import { AppBar, Toolbar, IconButton, Typography, Button, TextField, Input, OutlinedInput } from "@mui/material";
import { useContext, useState } from "react";
import { templatesNodeContext, } from "../../context/contextTemplates";

import { LoaderTemplates } from "../../loader/LoaderTemplates";
import { LoadingDialog } from "../LoadingDialog/LoadingDialog";
import { SplitButton } from "../SplitButton/SplitButton";

export const AppToolBar = () =>
{
    const tempContext = useContext(templatesNodeContext);
    const templateLoader = new LoaderTemplates();

    const [isLoading, setLoadingState] = useState<boolean>(false);

    const a = () =>
    {
      const handle = window.showDirectoryPicker().then(h => 
      {
          setLoadingState(true);

          templateLoader?.loadFromDirectoryHandle(h).then(resultTopNode => 
          {
            // console.log(r);
            // console.log(r.children?.length);

            tempContext.setValue(resultTopNode);
            setLoadingState(false);
          });
      });
    }

    const getTopNodes = () =>
    {
      if (tempContext.current?.children == null) return [];      
      return tempContext.current.children.filter(n => n.nodeType=="directory").map(n => n.name);
    }


    
    return (
        <AppBar position="sticky">
          <Toolbar>
            <SplitButton options={getTopNodes()}></SplitButton>

            <OutlinedInput  placeholder="検索(Ctrl+F)"/>

            <Button sx={{ marginLeft: "auto" }} color="inherit" onClick={a}>フォルダー選択</Button>
          </Toolbar>

          <LoadingDialog isOpen={isLoading}></LoadingDialog>

        </AppBar>
    );
  }