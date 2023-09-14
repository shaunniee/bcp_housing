import React from 'react'
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function Housing() {
  return (
    <div style={{height:"100%"}}>
    <TableauEmbed sourceUrl="https://public.tableau.com/views/bcp_housinf_updated/Dashboard1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link" />
    </div>
    )
}

export default Housing