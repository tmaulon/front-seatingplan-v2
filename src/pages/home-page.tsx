import React, { useContext, useState, useEffect } from "react"
import "../App.css"
import { BuildingsZonesSection } from "../components/building-zones/buildings-zones-section"
import { IBuilding } from "../components/building-card/building-card"
import styled from "styled-components"
import { Container } from "../components/container/container"

export const FakeBuildingsData: IBuilding[] = [
	{
		id: 1,
		name: "Bâtiment A",
		floorsNumber: 4,
		collaboratorsNumber: 64,
		receptionMaxCapacity: 64,
		currentReceptionCapavity: 64,
		officesNumber: 64,
		occupancyStatistics: 100,
		picture: {
			src: "/images/buildings/batiment-1.png",
			alt: "Image du Bâtiment A",
		},
	},
	{
		id: 2,
		name: "Bâtiment B",
		floorsNumber: 4,
		collaboratorsNumber: 64,
		receptionMaxCapacity: 64,
		currentReceptionCapavity: 64,
		officesNumber: 64,
		occupancyStatistics: 100,
		picture: {
			src: "/images/buildings/batiment-2.png",
			alt: "Image du Bâtiment B",
		},
	},
]

export const HomePage = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch("/demo/all")
			.then((res) => res.json())
			.then((json) => {
				console.log("json", json)
				setData(json)
			})
	}, [])

	return (
		<>
			<PresentationSection>
				<Container>
					<PictureWrapper>
						<PlaceholderPicture src="http://placekitten.com/540/570" alt="Place Kitten" />
					</PictureWrapper>
					<div>
						<h1>Seating Plan App</h1>
						<p>Plan, reserve, anticipate the arrivals and departures of its employees ont its premises</p>
					</div>
				</Container>
			</PresentationSection>
			<section>
				<h2>Fetch All User data</h2>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</section>
			<BuildingsZonesSection buildings={FakeBuildingsData} />
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
const PlaceholderPicture = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`
