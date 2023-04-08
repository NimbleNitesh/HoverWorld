import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

// import { logo, yariga } from "assets"
import logos from "assets/main_logo.jpg"
// import logos from "assets/logo_one.jpeg"
import mainLogo from "assets/logo_one.jpg"

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={mainLogo} alt="Refine" width="45px" />
        ) : (
          <img src={logos} alt="Refine" width="170px" />
        )}
      </Link>
    </Button>
  );
};
