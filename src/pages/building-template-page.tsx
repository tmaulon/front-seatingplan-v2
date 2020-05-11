import React, { useContext, useState, useEffect } from "react"
import "../App.css"
import { BuildingsZonesSection } from "../components/building-zones/buildings-zones-section"
import { IBuilding, BuildingCard } from "../components/building-card/building-card"
import styled from "styled-components"
import { Container } from "../components/container/container"
import { RouteComponentProps } from "react-router-dom"
import { FakeBuildingsData } from "./home-page"
import { BuildingCardDetails } from "../components/building-card/building-card-details"

interface BuildingMatchParams {
	buildingId: string
}
interface BuildingProps extends RouteComponentProps<BuildingMatchParams> {
	building: IBuilding
}

export const BuildingTemplatePage: React.FC<BuildingProps> = ({ match }) => {
	const [fakeUserId, setFakeUserId] = useState<number>()
	const fakeBuildings: IBuilding[] = FakeBuildingsData
	const [fakeBuilding, setFakeBuilding] = useState<IBuilding>()
	const [userData, setUserData] = useState()

	useEffect(() => {
		setFakeBuilding(fakeBuildings.find(({ id }) => id === parseInt(match.params.buildingId)))
	}, [])
	useEffect(() => {
		setFakeUserId(parseInt(match.params.buildingId))
		fetch(`/demo/user/${parseInt(match.params.buildingId)}`)
			.then((res) => res.json())
			.then((json) => {
				console.log("json", json)
				setUserData(json)
			})
	}, [])

	return (
		<>
			<PresentationSection>
				<Container>
					<PictureWrapper>
						<BuildingPicture
							src={`${
								fakeBuilding?.picture && fakeBuilding?.picture.src
									? process.env.PUBLIC_URL + fakeBuilding?.picture.src
									: process.env.PUBLIC_URL + "/images/buildings/batiment-placeholder.png"
							}`}
							alt={`${
								fakeBuilding?.picture && fakeBuilding?.picture.alt ? fakeBuilding?.picture.alt : "Image du Bâtiment"
							}`}
						/>
					</PictureWrapper>
					<div>
						<h1>Building-{match.params.buildingId}</h1>
						<p>Welcome in the Building-{match.params.buildingId} page</p>
						{fakeBuilding && <BuildingCardDetails building={fakeBuilding}></BuildingCardDetails>}
					</div>
				</Container>
			</PresentationSection>
			<section>
				<h2>Fetch All User data</h2>
				<pre>{JSON.stringify(userData, null, 2)}</pre>
			</section>
		</>
	)
}
const PresentationSection = styled.section`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;

	& > div {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-rows: minmax(80vh, 1fr);
		gap: 50px;
		align-items: center;
		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`
const PictureWrapper = styled.div`
	height: 100%;
`
const BuildingPicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
	object-position: center;
`
