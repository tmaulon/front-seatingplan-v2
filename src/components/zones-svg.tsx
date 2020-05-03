import React from "react"
import styled from "styled-components"
import { IBuilding } from "./building-card"

export type IZoneSVG = Pick<IBuilding, "id" | "name">

export const ZonesSVG = ({ zones }: { zones: IZoneSVG[] }) => {
	return (
		<ZonesDrawingWrapper>
			{zones.map(({ id, name }, index) => (
				<Box key={`${id}-${index}`}>
					<ZonesDrawing>
						<g>
							<path id={id} aria-title={name} d="m 20 20 l 0 50 l 30 0 l 0 -50 l -30 0" />
						</g>
					</ZonesDrawing>
				</Box>
			))}
		</ZonesDrawingWrapper>
	)
}

const ZonesDrawingWrapper = styled.ul`
	/* width: 100%;
	max-width: 500px;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	grid-auto-rows: 1fr;
	margin: 0;
	padding: 0; */
	list-style-type: none;
	margin: 0 auto;
	padding: 20px;
	display: grid;
	width: 300px;
	height: 300px;
	background-color: #e6e6e6;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 20px;
	transform: rotate(0);
	box-shadow: 6px 0px 10px 0px rgba(0, 0, 0, 0.75);
`
const Box = styled.li<{ cubewidth?: number }>`
	background-color: rgba(43, 43, 43, 1);
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ZonesDrawing = styled.svg`
	grid-column: span 1;
	grid-row: span 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& path {
		fill: transparent;
		stroke: #646464;
		stroke-width: 1px;
		stroke-dasharray: 4, 4;
		stroke-linejoin: round;
		transition-property: stroke-dasharray, stroke, fill;
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-duration: 0.3s;
		&:hover {
			fill: red;
			stroke: red;
			stroke-linejoin: solid;
			stroke-dasharray: 0;
		}
	}
`
