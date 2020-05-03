import React from "react"
import styled from "styled-components"
import { ZonesSVG } from "./zones-svg"
import { IBuilding, BuildingCard } from "./building-card"

export const BuildingZones = ({ buildings }: { buildings: IBuilding[] }) => {
	console.log(buildings)
	return (
		<ZonesSVGWrapper>
			<ZonesSVG zones={buildings} />
			<ZonesListWrapper>
				<ZonesList>
					{buildings.map((p, index) => (
						<ZoneItem key={`${p.id}-${index}`}>
							<BuildingCard building={p} />
						</ZoneItem>
					))}
				</ZonesList>
			</ZonesListWrapper>
		</ZonesSVGWrapper>
	)
}
const ZonesSVGWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
	margin: 0 auto;
`
const ZonesListWrapper = styled.div``
const ZonesList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-auto-rows: 1fr;
	grid-gap: 50px;
`
const ZoneItem = styled.li`
	margin: 0;
	padding: 0;
	grid-column: span 1;
	grid-row: span 1;
`
