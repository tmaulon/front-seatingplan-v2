import React from "react"
import styled from "styled-components"
import { IBuilding } from "../building-card/building-card"

export type IZoneSVG = Pick<IBuilding, "id" | "name">

export const ZonesSVG = ({
	zones,
	buildingHovered,
	setBuildingHovered,
	buildingCardHovered,
}: {
	zones: IZoneSVG[]
	buildingHovered: number | undefined
	setBuildingHovered: (id: React.SetStateAction<number | undefined>) => void
	buildingCardHovered: number | undefined
}) => {
	return (
		<ZonesDrawingWrapper>
			{zones.map(({ id, name }, index) => (
				<Box key={`${id}-${index}`}>
					<ZonesDrawingLink
						title={`Voir le bâtiment ${name}`}
						href={`http://gooogle.com/?q=${id}`}
						onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
							e.preventDefault()
						}}
						onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
							setBuildingHovered(id)
						}}
						onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
							setBuildingHovered(undefined)
						}}
					>
						<ZonesDrawing
							index={index}
							buildingId={id}
							buildingCardHovered={buildingCardHovered}
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<path aria-label={name} d="m 0 0 l 0 50 l 30 0 l 0 -50 l -30 0" />
						</ZonesDrawing>
					</ZonesDrawingLink>
				</Box>
			))}
		</ZonesDrawingWrapper>
	)
}

const ZonesDrawingWrapper = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 20px;
	display: grid;
	background-color: #e6e6e6;
	grid-template-columns: repeat(4, 70px);
	grid-template-rows: repeat(4, 90px);
	grid-gap: 20px;
	transform: rotate(0);
	box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.35);
`
const Box = styled.li`
	background-color: rgba(43, 43, 43, 1);
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
`
const ZonesDrawingLink = styled.a`
	text-decoration: none;
	grid-column: span 1;
	grid-row: span 1;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ZonesDrawing = styled.svg<{
	buildingId: number | undefined
	buildingCardHovered: number | undefined
	index: number
}>`
	height: 100%;
	width: 100%;
	& path {
		fill: ${(props) =>
			props.buildingId === props.buildingCardHovered
				? props.index % 2 === 0
					? "#00b0bd"
					: "#cddc39"
				: "rgba(76, 81, 106, 0.2)"};
		stroke: ${(props) => (props.buildingId === props.buildingCardHovered ? "#fff" : "#646464")};
		stroke-linejoin: ${(props) => (props.buildingId === props.buildingCardHovered ? "solid" : "round")};
		stroke-dasharray: ${(props) => (props.buildingId === props.buildingCardHovered ? "0" : " 4, 4")};
		stroke-width: 1px;
		transition-property: stroke-dasharray, stroke, fill;
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-duration: 0.3s;
		&:hover {
			cursor: pointer;
			fill: ${(props) => (props.index % 2 === 0 ? "#00b0bd" : "#cddc39")};
			stroke: #fff;
			stroke-linejoin: solid;
			stroke-dasharray: 0;
		}
	}
`
