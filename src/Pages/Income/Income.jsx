import React from 'react'
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function Income() {
  return (
    <div style={{height:"100%"}}>
    <TableauEmbed sourceUrl="https://public.tableau.com/views/AgeFriendlyElderlyDemographics/IrelandSnapshot?:language=en-US&:display_count=n&:origin=viz_share_link"/>
    </div>
  )
}

export default Income