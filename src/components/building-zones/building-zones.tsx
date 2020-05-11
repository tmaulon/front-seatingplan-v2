import React, { useState } from "react"
import styled from "styled-components"
import { ZonesSVG } from "./zones-svg"
import { IBuilding, BuildingCard } from "../building-card/building-card"

export const BuildingZones = ({ buildings }: { buildings: IBuilding[] }) => {
	console.log(buildings)
	const [buildingHovered, setBuildingHovered] = useState<number | undefined>(undefined)
	const [buildingCardHovered, setBuildingCardHovered] = useState<number | undefined>(undefined)
	return (
		<ZonesSVGWrapper>
			<ZonesSVG
				buildingCardHovered={buildingCardHovered}
				zones={buildings}
				buildingHovered={buildingHovered}
				setBuildingHovered={setBuildingHovered}
			/>
			<ZonesListWrapper>
				<ZonesList>
					{buildings.map((p, index) => (
						<ZoneItem key={`${p.id}-${index}`}>
							<BuildingCard
								index={index}
								building={p}
								buildingSVGZoneHovered={buildingHovered}
								setBuildingCardHovered={setBuildingCardHovered}
							/>
						</ZoneItem>
					))}
				</ZonesList>
			</ZonesListWrapper>
		</ZonesSVGWrapper>
	)
}
const ZonesSVGWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin: 0;
`
const ZonesListWrapper = styled.div``
const ZonesList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	grid-auto-rows: auto;
	grid-gap: 50px;
`
const ZoneItem = styled.li`
	margin: 0;
	padding: 0;
	grid-column: span 1;
	grid-row: span 1;
`
