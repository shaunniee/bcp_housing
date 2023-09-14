import React from 'react'
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function Income() {
  return (
    <div style={{height:"100%"}}>
    <TableauEmbed sourceUrl="https://public.tableau.com/app/profile/dheeraja.kurma/viz/AgeFriendlyElderlyDemographics/IrelandSnapshot"/>
    </div>
  )
}

export default Income