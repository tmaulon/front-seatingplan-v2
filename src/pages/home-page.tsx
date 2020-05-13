import React, { useState, useEffect } from "react"
import "../App.css"
import { BuildingsZonesSection } from "../components/building-zones/buildings-zones-section"
import styled from "styled-components"
import { Container } from "../components/container/container"
import { useCustomfetch } from "../hooks/useCustomFetch"
import { FakeBuildingsData } from "../content/fake-buildings-data"
import { IBuilding } from "../domain/building"
import { motion } from "framer-motion"
import { openingHomePageAnimationsVariants, Layout } from "../components/layout/layout"

export const HomePage = () => {
	const [url, setUrl] = useState<string>("")
	const { data, loading, error } = useCustomfetch(url)
	const [buildings, setBuildings] = useState<IBuilding[]>()

	const getAllBuildingsData = () => {
		// test fetching Github API
		// setUrl(`https://api.github.com/users/tmaulon`)
		setUrl(`/api/1.0/batiment`)
	}

	useEffect(() => {
		getAllBuildingsData()
		if (!data) return
		setBuildings(data)
	}, [data])

	return (
		<motion.div
			variants={openingHomePageAnimationsVariants}
			animate={"visibleContent"}
			initial={"hidden"}
			transition={{
				delay: 3,
				duration: 1,
				ease: "easeInOut",
			}}
		>
			<PresentationSection>
				<Container>
					<PictureWrapper>
						<PlaceholderPicture src={`${process.env.PUBLIC_URL}/images/workspace.svg`} alt="Place Kitten" />
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
				{/* {!loading && data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
				{!loading && buildings && <pre>{JSON.stringify(buildings, null, 2)}</pre>}
				{!loading && error && (
					<div>
						<p>{"Erreur"}</p>
						<pre>{error}</pre>
					</div>
				)}
			</section>
			<BuildingsZonesSection buildings={FakeBuildingsData} />
			{!loading && buildings && <BuildingsZonesSection buildings={buildings} />}
		</motion.div>
	)
}

export const HomePageWithLayout = () => {
	return (
		<Layout isHomePage>
			<HomePage />
		</Layout>
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
	object-fit: contain;
	object-position: center;
`
export const LoadingWrapper = styled.div`
	margin-left: 10px;
`
