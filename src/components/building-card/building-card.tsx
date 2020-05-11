import React, { useState } from "react"
import styled from "styled-components"
import { Flipper, Flipped } from "react-flip-toolkit"
import { NavLink } from "react-router-dom"

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
const SmallBuildingCard = ({
	building,
	hovered,
	buildingSVGZoneHovered,
	index,
	isOpen,
}: {
	building: IBuilding
	hovered: boolean
	buildingSVGZoneHovered: number | undefined
	index: number
	isOpen: boolean
}) => {
	const { id, name, picture } = building
	return (
		<Flipped flipId="animatedBuildingCardWrapper" transformOrigin={"top"}>
			<CollapsedZoneLink id={`list-${id}`}>
				<Flipped inverseFlipId={"animatedBuildingCardWrapper"}>
					<Head>
						<HeadTextWrapper>
							<HeadLabel>Nom du Bâtiment</HeadLabel>
							<HeadOutput>{name}</HeadOutput>
						</HeadTextWrapper>

						<Flipper flipKey={hovered} spring="veryGentle">
							<PictureWrapper
								isOpen={isOpen}
								index={index}
								className={hovered || id === buildingSVGZoneHovered ? "hovered" : ""}
							>
								<Picture
									src={`${
										picture && picture.src
											? process.env.PUBLIC_URL + picture.src
											: process.env.PUBLIC_URL + "/images/buildings/batiment-placeholder.png"
									}`}
									alt={`${picture && picture.alt ? picture.alt : "Image du Bâtiment"}`}
								/>
							</PictureWrapper>
						</Flipper>
					</Head>
				</Flipped>
			</CollapsedZoneLink>
		</Flipped>
	)
}

const ExpandedBuildingCard = ({ building, index, isOpen }: { building: IBuilding; index: number; isOpen: boolean }) => {
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
		<Flipped flipId="animatedBuildingCardWrapper" transformOrigin={"top"}>
			<ExpandedZoneLink to={`/building/building-${id}`} id={`list-${id}`} title={`Enter in Building : ${name}`}>
				<Flipped inverseFlipId={"animatedBuildingCardWrapper"}>
					<Head>
						<HeadTextWrapper>
							<HeadLabel>Nom du Bâtiment</HeadLabel>
							<HeadOutput>{name}</HeadOutput>
						</HeadTextWrapper>

						<PictureWrapper index={index} isOpen={isOpen}>
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
				</Flipped>
				<Details>
					<Detail>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailLabel>Nombre d'étages</DetailLabel>
						</Flipped>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailOutput>{floorsNumber}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailLabel>Nombre de Collabrateurs</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailOutput>{collaboratorsNumber}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailLabel>Capacité Max d'acceuil</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailOutput>{receptionMaxCapacity}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailLabel>Capacité d'acceuil actuelle</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailOutput>{currentReceptionCapavity}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailLabel>Nombre de Bureaux</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailOutput>{officesNumber}</DetailOutput>
						</Flipped>
					</Detail>
					<Detail>
						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailLabel>Statistiques d'occupation</DetailLabel>
						</Flipped>

						<Flipped inverseFlipId="animatedBuildingCardWrapper">
							<DetailOutput>{`${occupancyStatistics}%`}</DetailOutput>
						</Flipped>
					</Detail>
				</Details>

				<AsideArrowWrapper>></AsideArrowWrapper>
			</ExpandedZoneLink>
		</Flipped>
	)
}
export const BuildingCard = ({
	building,
	buildingSVGZoneHovered,
	setBuildingCardHovered,
	index,
}: {
	building: IBuilding
	buildingSVGZoneHovered: number | undefined | undefined
	setBuildingCardHovered: (id: React.SetStateAction<number | undefined>) => void
	index: number
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [hovered, setHovered] = useState(false)

	return (
		<Flipper flipKey={[isOpen, hovered]} spring="veryGentle">
			<div
				onClick={(e) => setIsOpen((e) => !e)}
				onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
					setHovered(!hovered)
					setBuildingCardHovered(building.id)
				}}
				onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
					setHovered(!hovered)
					setBuildingCardHovered(undefined)
				}}
			>
				{isOpen ? (
					<ExpandedBuildingCard index={index} building={building} isOpen={isOpen} />
				) : (
					<SmallBuildingCard
						index={index}
						building={building}
						hovered={hovered}
						buildingSVGZoneHovered={buildingSVGZoneHovered}
						isOpen={isOpen}
					/>
				)}
			</div>
		</Flipper>
	)
}

const CollapsedZoneLink = styled.div`
	display: grid;
	grid-template-areas: "head";
	grid-template-columns: 1fr;
	grid-template-rows: 140px;
	padding: 0;
	margin: 0;
	text-decoration: none;
	color: inherit;
	background-color: #fff;
	border-radius: 14px;
	overflow: hidden;
`
const ExpandedZoneLink = styled(NavLink)`
	display: grid;
	grid-template-rows: 140px 2fr;
	grid-template-columns: 1fr;
	grid-template-columns: 1fr 20px;
	grid-template-areas:
		"head aside"
		"details aside";
	padding: 0;
	margin: 0;
	text-decoration: none;
	color: inherit;
	background-color: #fff;
	border-radius: 14px;
	overflow: hidden;
`
const Head = styled.div`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
	grid-area: head;
	grid-template-columns: 3fr minmax(150px, 1fr);
	grid-template-rows: 1fr;
	align-items: center;
`
const HeadTextWrapper = styled.div`
	grid-column: span 1;
	grid-row: span 1;
	justify-self: flex-start;
	padding: 20px;

	& + div {
		height: 100%;
	}
`
export const HeadLabel = styled.p`
	margin: 0;
	color: #d4d5ed;
	text-align: left;
	font-size: 1rem;
	font-weight: 500;
`
export const HeadOutput = styled.h3`
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
const PictureWrapper = styled.div<{ index: number; isOpen: boolean }>`
	background-color: ${(props) => (props.isOpen ? (props.index % 2 === 0 ? "#00b0bd" : "#cddc39") : "transparent")};
	grid-column: span 1;
	grid-row: span 1;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.6s ease-in-out;
	&.hovered {
		background-color: ${(props) => (props.index % 2 === 0 ? "#00b0bd" : "#cddc39")};
	}
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
