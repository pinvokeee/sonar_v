import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { useContext, useState } from "react";
import { templatesNodeContext } from "../../context/contextTemplates";

import { LoaderTemplates } from "../../loader/LoaderTemplates";

export const AppToolBar = () =>
{
    const ctx = useContext(templatesNodeContext);

    const templateLoader = new LoaderTemplates();

    const a = () =>
    {
      const handle = window.showDirectoryPicker().then(h => 
      {
          templateLoader?.loadFromDirectoryHandle(h).then(r  => 
          {
            console.log(r.children?.length);
            ctx.setNode(r);
          });
      });
    }

    return (
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
  
            >
            </IconButton>
            {ctx.node.children?.length}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button color="inherit" onClick={a}>Login</Button>
          </Toolbar>
        </AppBar>
    );
  }