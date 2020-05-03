import React from "react"
import { BuildingZones } from "./building-zones"
import { IBuilding } from "./building-card"
import styled from "styled-components"
import { Container } from "./container"
export const BuildingsZonesSection = ({ buildings }: { buildings: IBuilding[] }) => {
	return (
		<StyledSection>
			<Container>
				<SectionHeadingWrapper>
					<SectionTitle>Plan</SectionTitle>
					<SectionDescription>Plan svg intéractif</SectionDescription>
				</SectionHeadingWrapper>
				<BuildingZones buildings={buildings} />
			</Container>
		</StyledSection>
	)
}
const StyledSection = styled.section`
	margin: 50px 0;
	padding: 50px 0;
	width: 100%;
	background-color: #f6f7fb;
`
const SectionHeadingWrapper = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 50px;
`
const SectionTitle = styled.h2`
	font-family: "Baloo Da 2", Helvetica, Arial, sans-serif;
	font-size: 1rem;
	font-weight: 500;
	text-transform: uppercase;
	color: #d4d5ed;
	margin: 0;
	padding: 0;
`
const SectionDescription = styled.p`
	font-family: "Baloo Da 2", Helvetica, Arial, sans-serif;
	font-size: 2.5rem;
	font-weight: 700;
	color: #4c516a;
	margin: 0;
	padding: 0;
`
