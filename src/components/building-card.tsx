import React from "react"
import styled from "styled-components"

export interface IPicture {
	src: string
	alt: string
}
export interface IBuilding {
	id: string
	name: string
	floorsNumber: number
	collaboratorsNumber: number
	receptionMaxCapacity: number
	currentReceptionCapavity: number
	officesNumber: number
	occupancyStatistics: number
	picture?: IPicture
}
export const BuildingCard = ({ building }: { building: IBuilding }) => {
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
		<ZoneLink href={`http://gooogle.com/?q=${id}`} id={`list-${id}`}>
			<Head>
				<HeadTextWrapper>
					<Label>Nom du Bâtiment</Label>
					<HeadOutput>{name}</HeadOutput>
				</HeadTextWrapper>

				<PictureWrapper>
					<Picture
						src={`${
							picture && picture.src
								? process.env.PUBLIC_URL + picture.src
								: process.env.PUBLIC_URL + "/images/buildings/batiment-placeholder.png"
						}`}
						alt={`${picture && picture.alt ? picture.alt : "Image du Bâtiment"}`}
					/>
				</PictureWrapper>
			</Head>
			<Details>
				<Detail>
					<p>Nombre d'étages</p>
					<p>{floorsNumber}</p>
				</Detail>
				<Detail>
					<p>Nombre de Collabrateurs</p>
					<p>{collaboratorsNumber}</p>
				</Detail>
				<Detail>
					<p>Capacité Max d'acceuil</p>
					<p>{receptionMaxCapacity}</p>
				</Detail>
				<Detail>
					<p>Capacité d'acceuil actuelle</p>
					<p>{currentReceptionCapavity}</p>
				</Detail>
				<Detail>
					<p>Nombre de Bureaux</p>
					<p>{officesNumber}</p>
				</Detail>
				<Detail>
					<p>Statistiques d'occupation</p>
					<p>{`${occupancyStatistics}%`}</p>
				</Detail>
			</Details>
		</ZoneLink>
	)
}
const ZoneLink = styled.a`
	padding: 0;
	margin: 0;
	text-decoration: none;
	color: inherit;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 2fr;
`
const Head = styled.div`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
	grid-template-columns: 3fr minmax(150px, 1fr);
	grid-template-rows: 1fr;
`
const HeadTextWrapper = styled.div`
	grid-column: span 1;
	grid-row: span 1;
`
const Label = styled.p``
const HeadOutput = styled.h3``
const PictureWrapper = styled.div`
	background-color: transparent;
	grid-column: span 1;
	grid-row: span 1;
	padding: 20px;
	transition: background-color 0.3s ease-in-out;
`
const Picture = styled.img`
	max-width: 100px;
	max-height: 100px;
	width: 100%;
	height: auto;
	object-fit: contain;
`
const Details = styled.div`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
`
const Detail = styled.div`
	grid-row: span 1;
	grid-column: span 1;
`
