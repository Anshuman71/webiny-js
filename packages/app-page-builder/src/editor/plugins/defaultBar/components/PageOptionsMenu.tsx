import React from "react";
import { Menu } from "@webiny/ui/Menu";
import { IconButton } from "@webiny/ui/Button";
import { ReactComponent as MoreVerticalIcon } from "@webiny/app-page-builder/editor/assets/icons/more_vert.svg";
import { getPlugins } from "@webiny/plugins";
import { css } from "emotion";
import { PbEditorDefaultBarRightPageOptionsPlugin } from "@webiny/app-page-builder/types";

const menuStyles = css({
    width: 220,
    right: -105,
    left: "auto !important",
    ".disabled": {
        opacity: 0.5,
        pointerEvents: "none"
    }
});

export default function PageOptionsMenu() {
    const plugins = getPlugins<PbEditorDefaultBarRightPageOptionsPlugin>(
        "pb-editor-default-bar-right-page-options"
    );
    return (
        <Menu
            data-testid="pb-editor-page-options-menu"
            className={menuStyles}
            handle={<IconButton icon={<MoreVerticalIcon />} />}
        >
            {plugins.map(pl => React.cloneElement(pl.render(), { key: pl.name }))}
        </Menu>
    );
}
