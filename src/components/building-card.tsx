import React, { useState } from "react"
import styled from "styled-components"
import { Flipper, Flipped } from "react-flip-toolkit"

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
const SmallBuildingCard = ({ building }: { building: IBuilding }) => {
	const { id, name, picture } = building
	return (
		<Flipped flipId="animatedDiv" transformOrigin={"top"}>
			<CollapsedZoneLink
				href={`http://gooogle.com/?q=${id}`}
				id={`list-${id}`}
				onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
					e.preventDefault()
				}}
			>
				<Head>
					<HeadTextWrapper>
						<Flipped inverseFlipId="animatedDiv">
							<HeadLabel>Nom du Bâtiment</HeadLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<HeadOutput>{name}</HeadOutput>
						</Flipped>
					</HeadTextWrapper>

					<PictureWrapper>
						<Flipped inverseFlipId="animatedDiv">
							<Picture
								src={`${
									picture && picture.src
										? process.env.PUBLIC_URL + picture.src
										: process.env.PUBLIC_URL + "/images/buildings/batiment-placeholder.png"
								}`}
								alt={`${picture && picture.alt ? picture.alt : "Image du Bâtiment"}`}
							/>
						</Flipped>
					</PictureWrapper>
				</Head>
			</CollapsedZoneLink>
		</Flipped>
	)
}
const ExpandedBuildingCard = ({ building }: { building: IBuilding }) => {
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
		<Flipped flipId="animatedDiv" transformOrigin={"top"}>
			<ExpandedZoneLink
				href={`http://gooogle.com/?q=${id}`}
				id={`list-${id}`}
				onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
					e.preventDefault()
				}}
			>
				<Head>
					<HeadTextWrapper>
						<Flipped inverseFlipId="animatedDiv">
							<HeadLabel>Nom du Bâtiment</HeadLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<HeadOutput>{name}</HeadOutput>
						</Flipped>
					</HeadTextWrapper>

					<PictureWrapper>
						<Flipped inverseFlipId="animatedDiv">
							<Picture
								src={`${
									picture && picture.src
										? process.env.PUBLIC_URL + picture.src
										: process.env.PUBLIC_URL + "/images/buildings/batiment-placeholder.png"
								}`}
								alt={`${picture && picture.alt ? picture.alt : "Image du Bâtiment"}`}
							/>
						</Flipped>
					</PictureWrapper>
				</Head>
				<Details>
					<Detail>
						<Flipped inverseFlipId="animatedDiv">
							<DetailLabel>Nombre d'étages</DetailLabel>
						</Flipped>
						<Flipped inverseFlipId="animatedDiv">
							<DetailOutput>{floorsNumber}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedDiv">
							<DetailLabel>Nombre de Collabrateurs</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<DetailOutput>{collaboratorsNumber}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedDiv">
							<DetailLabel>Capacité Max d'acceuil</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<DetailOutput>{receptionMaxCapacity}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedDiv">
							<DetailLabel>Capacité d'acceuil actuelle</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<DetailOutput>{currentReceptionCapavity}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedDiv">
							<DetailLabel>Nombre de Bureaux</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<DetailOutput>{officesNumber}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedDiv">
							<DetailLabel>Statistiques d'occupation</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedDiv">
							<DetailOutput>{`${occupancyStatistics}%`}</DetailOutput>
						</Flipped>
					</Detail>
				</Details>
			</ExpandedZoneLink>
		</Flipped>
	)
}
export const BuildingCard = ({ building }: { building: IBuilding }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Flipper flipKey={isOpen} spring="veryGentle" applyTransformOrigin={false}>
			<div onClick={(e) => setIsOpen((e) => !e)}>
				{isOpen ? <ExpandedBuildingCard building={building} /> : <SmallBuildingCard building={building} />}
			</div>
		</Flipper>
	)
}
const CollapsedZoneLink = styled.a`
	padding: 0;
	margin: 0;
	text-decoration: none;
	color: inherit;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	background-color: #fff;
	border-radius: 14px;
	overflow: hidden;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
`
const ExpandedZoneLink = styled.a`
	padding: 0;
	margin: 0;
	text-decoration: none;
	color: inherit;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 2fr;
	background-color: #fff;
	border-radius: 14px;
	overflow: hidden;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
`
const Head = styled.div`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
	grid-template-columns: 3fr minmax(150px, 1fr);
	grid-template-rows: 1fr;
	align-items: center;
`
const HeadTextWrapper = styled.div`
	grid-column: span 1;
	grid-row: span 1;
	justify-self: flex-start;
	padding: 20px;
`
const HeadLabel = styled.p`
	margin: 0;
	color: #d4d5ed;
	text-align: left;
	font-size: 1rem;
	font-weight: 500;
`
const HeadOutput = styled.h3`
	margin: 0;
	color: #4c516a;
	text-align: left;
	font-size: 2rem;
	line-height: 28px;
	font-weight: 700;
`
const DetailLabel = styled(HeadLabel)`
	font-size: 0.875rem;
`
const DetailOutput = styled(HeadOutput)`
	font-size: 1rem;
`
const PictureWrapper = styled.div`
	background-color: transparent;
	grid-column: span 1;
	grid-row: span 1;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s ease-in-out;
`
const Picture = styled.img`
	max-width: 100px;
	max-height: 100px;
	width: 100%;
	height: auto;
	object-fit: contain;
	padding: 20px;
`
const Details = styled.div`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
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
