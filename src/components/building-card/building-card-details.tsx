import React from "react"
import styled from "styled-components"
import { HeadLabel, HeadOutput } from "./building-card"

export interface IPicture {
	src: string
	alt: string
}
export interface IBuilding {
	id: number
	name: string
	floorsNumber: number
	collaboratorsNumber: number
	receptionMaxCapacity: number
	currentReceptionCapavity: number
	officesNumber: number
	occupancyStatistics: number
	picture?: IPicture
}

export const BuildingCardDetails = ({ building }: { building: IBuilding }) => {
	const {
		id,
		name,
		floorsNumber,
		collaboratorsNumber,
		receptionMaxCapacity,
		currentReceptionCapavity,
		officesNumber,
		occupancyStatistics,
		picture,
	} = building
	return (
		<Details>
			<Detail>
				<DetailOutput>{floorsNumber}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Nombre de Collabrateurs</DetailLabel>

				<DetailOutput>{collaboratorsNumber}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Capacité Max d'acceuil</DetailLabel>

				<DetailOutput>{receptionMaxCapacity}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Capacité d'acceuil actuelle</DetailLabel>

				<DetailOutput>{currentReceptionCapavity}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Nombre de Bureaux</DetailLabel>

				<DetailOutput>{officesNumber}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Statistiques d'occupation</DetailLabel>

				<DetailOutput>{`${occupancyStatistics}%`}</DetailOutput>
			</Detail>
		</Details>
	)
}

const DetailLabel = styled(HeadLabel)`
	font-size: 0.875rem;
`
const DetailOutput = styled(HeadOutput)`
	font-size: 1rem;
`
const Details = styled.div`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
	grid-area: details;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	& > div {
		border-top: 1px solid #d9daef;
	}
	& > div:nth-of-type(odd) {
		border-right: 1px solid #d9daef;
	}
`
const Detail = styled.div`
	grid-row: span 1;
	grid-column: span 1;
	padding: 20px;
	text-align: left;
	width: -webkit-fill-available;
`
const AsideArrowWrapper = styled.div`
	grid-area: aside;
	grid-row: span 2;
	grid-column: span 1;
	border-left: 1px solid #d9daef;
	color: #d9daef;
	display: flex;
	justify-content: center;
	align-items: center;
`
