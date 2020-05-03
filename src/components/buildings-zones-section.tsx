import React from "react"
import { BuildingZones } from "./building-zones"
import { IBuilding } from "./building-card"
import styled from "styled-components"
import { Container } from "./container"
export const BuildingsZonesSection = ({ buildings }: { buildings: IBuilding[] }) => {
	return (
		<StyledSection>
			<Container>
				<h2>Map</h2>
				<p>Carte svg intéractive</p>
				<BuildingZones buildings={buildings} />
			</Container>
		</StyledSection>
	)
}
const StyledSection = styled.section`
	margin: 50px 0;
	width: 100%;
`
