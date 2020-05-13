import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IBuilding, IFloor } from "../../domain/building"

export const BuildingCardDetails = ({ building }: { building: IBuilding }) => {
	const [isBuildingDetailPage, setIsBuildingDetailPage] = useState(false)
	const { etages } = building
	// Todo : count how many desks are assigned
	const getTotalCollaborators = (etages: IFloor[]) =>
		etages
			.map((e) =>
				e.plans.map((p) => p.currentReceptionCapacity).reduce((previousPLan, nextPlan) => previousPLan + nextPlan)
			)
			.reduce((previousFloor, nextFloor) => previousFloor + nextFloor)

	const getTotalReceptionMaxcapacity = (etages: IFloor[]) =>
		etages
			.map((e) =>
				e.plans.map((p) => p.receptionMaxcapacity).reduce((previousPLan, nextPlan) => previousPLan + nextPlan)
			)
			.reduce((previousFloor, nextFloor) => previousFloor + nextFloor)

	const getTotalCurrentReceptionCapacity = (etages: IFloor[]) =>
		etages
			.map((e) =>
				e.plans.map((p) => p.currentReceptionCapacity).reduce((previousPLan, nextPlan) => previousPLan + nextPlan)
			)
			.reduce((previousFloor, nextFloor) => previousFloor + nextFloor)

	const getTotalDesks = (etages: IFloor[]) =>
		etages
			.map((e) => e.plans.map((p) => p.bureaux.length).reduce((previousPLan, nextPlan) => previousPLan + nextPlan))
			.reduce((previousFloor, nextFloor) => previousFloor + nextFloor)

	const getTotalAssignedDesks = (etages: IFloor[]) =>
		etages
			.map((e) =>
				e.plans
					.map((p) => p.bureaux.filter((bureau) => bureau.customers.length > 0).length)
					.reduce((previousPLan, nextPlan) => previousPLan + nextPlan)
			)
			.reduce((previousFloor, nextFloor) => previousFloor + nextFloor)

	const getTotalOccupancyStatistics = (etages: IFloor[]) =>
		(getTotalAssignedDesks(etages) / getTotalDesks(etages)) * 100

	useEffect(() => {
		const path = document.location.pathname
		if (path.startsWith("/building/")) setIsBuildingDetailPage(true)
	}, [])

	return (
		<Details isBuildingDetailPage={isBuildingDetailPage}>
			<Detail>
				<DetailLabel>Nombre d'étages</DetailLabel>

				<DetailOutput>{etages.length}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Nombre de Collabrateurs</DetailLabel>

				<DetailOutput>{getTotalCollaborators(etages)}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Capacité Max d'acceuil</DetailLabel>

				<DetailOutput>{getTotalReceptionMaxcapacity(etages)}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Capacité d'acceuil actuelle</DetailLabel>

				<DetailOutput>{getTotalCurrentReceptionCapacity(etages)}</DetailOutput>
			</Detail>
			<Detail>
				<DetailLabel>Nombre de Bureaux</DetailLabel>

				<DetailOutput>{getTotalDesks(etages)}</DetailOutput>
				{/* <DetailOutput>{officesNumber}</DetailOutput> */}
			</Detail>
			<Detail>
				<DetailLabel>Statistiques d'occupation</DetailLabel>

				<DetailOutput>{`${getTotalOccupancyStatistics(etages)}%`}</DetailOutput>
				{/* <DetailOutput>{`${occupancyStatisctics}%`}</DetailOutput> */}
			</Detail>
		</Details>
	)
}

const DetailLabel = styled.p`
	margin: 0;
	color: #4c516a;
	text-align: left;
	font-size: 0.875rem;
	line-height: 28px;
	font-weight: 700;
`
const DetailOutput = styled.h3`
	font-size: 1rem;
	margin: 0;
	color: #4c516a;
	text-align: left;
	line-height: 28px;
	font-weight: 700;
`
const Details = styled.div<{ isBuildingDetailPage: boolean }>`
	display: grid;
	grid-row: span 1;
	grid-column: span 1;
	grid-area: details;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	background-color: ${(props) => (props.isBuildingDetailPage ? "rgba(255, 255, 255, 0.7)" : "")};
	border-radius: ${(props) => (props.isBuildingDetailPage ? "14px" : "")};
	overflow: ${(props) => (props.isBuildingDetailPage ? "hidden" : "")};
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
