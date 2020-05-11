import React, { useState, useEffect } from "react"
import "../App.css"
import { BuildingsZonesSection } from "../components/building-zones/buildings-zones-section"
import styled from "styled-components"
import { Container } from "../components/container/container"
import { useCustomfetch } from "../hooks/useCustomFetch"
import { FakeBuildingsData } from "../content/fake-buildings-data"

export const HomePage = () => {
	const [url, setUrl] = useState<string>("")
	const { data, loading, error } = useCustomfetch(url)

	const getAllUsersData = () => {
		setUrl(`/demo/all`)
	}

	useEffect(() => {
		getAllUsersData()
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
				{loading && url && (
					<LoadingWrapper>
						<p>Loading ...</p>
					</LoadingWrapper>
				)}
				{!loading && data && <pre>{JSON.stringify(data, null, 2)}</pre>}
				{!loading && error && <p>{error}</p>}
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
export const LoadingWrapper = styled.div`
	margin-left: 10px;
`
