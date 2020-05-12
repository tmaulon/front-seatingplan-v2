import React, { useState, useEffect } from "react"
import "../App.css"
import styled from "styled-components"
import { Container } from "../components/container/container"
import { BuildingCardDetails } from "../components/building-card/building-card-details"
import { useCustomfetch } from "../hooks/useCustomFetch"
import { FakeBuildingsData } from "../content/fake-buildings-data"
import { BuildingProps, IBuilding } from "../domain/building"
import { NavLink } from "react-router-dom"

export const BuildingTemplatePage: React.FC<BuildingProps> = ({ match }) => {
	const fakeBuildings: IBuilding[] = FakeBuildingsData
	const [fakeBuilding, setFakeBuilding] = useState<IBuilding>()
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

	useEffect(() => {
		setFakeBuilding(fakeBuildings.find(({ id }) => id === parseInt(match.params.buildingId)))
	}, [fakeBuildings, match.params.buildingId])

	return (
		<>
			{fakeBuilding && (
				<PresentationSection>
					<Container>
						<PictureWrapper>
							<BuildingPicture
								src={`${
									fakeBuilding.picture && fakeBuilding.picture.src
										? process.env.PUBLIC_URL + fakeBuilding.picture.src
										: process.env.PUBLIC_URL + "/images/buildings/batiment-placeholder.png"
								}`}
								alt={`${
									fakeBuilding.picture && fakeBuilding.picture.alt ? fakeBuilding.picture.alt : "Image du Bâtiment"
								}`}
							/>
						</PictureWrapper>
						<BuildingInformations>
							<h1>{fakeBuilding.name}</h1>
							<p>Bienvenu dans le bâtiment : {fakeBuilding.name}</p>
							<BuildingCardDetails building={fakeBuilding}></BuildingCardDetails>
						</BuildingInformations>
						<FloorsPlansWrapper>
							<h2>Plus d'informations sur les plans du bâtiment</h2>
							<p>
								Sélectionne un étage pour en savoir pus sur son aménagement et les cllaborateurs qui y sont installés
							</p>
							<PlansList>
								{fakeBuilding &&
									fakeBuilding.plans.map((p, i) => (
										<PlanItem
											to={`/building/building-${fakeBuilding.id}/plan-${p.id}`}
											title={`Voir plus en détail le plan : ${p.name}`}
											key={`${p.id}-${i}`}
										>
											<PlanPicture
												src={`${
													p.picture && p.picture.src
														? process.env.PUBLIC_URL + p.picture.src
														: process.env.PUBLIC_URL + "/images/buildings/office-plan-placeholder.svg"
												}`}
												alt={`${p.picture ? p.picture.alt : `Plan du ${p.name}`}`}
											/>
											<PlanTitle>{p.name}</PlanTitle>
										</PlanItem>
									))}
							</PlansList>
						</FloorsPlansWrapper>
					</Container>
				</PresentationSection>
			)}
			<section>
				<h2>Fetch All User data</h2>
				{loading && url && (
					<LoadingWrapper>
						<p>Loading ...</p>
					</LoadingWrapper>
				)}
				{!loading && buildings && <pre>{JSON.stringify(buildings, null, 2)}</pre>}
				{!loading && error && <p>{error}</p>}
			</section>
		</>
	)
}
const PresentationSection = styled.section`
	background-color: #282c34;
	min-height: 100vh;
	padding: 100px 0;
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
		grid-template-rows: repeat(2, 1fr);
		grid-template-areas:
			"BuildingPicture BuildingInformations"
			"FloorsPlansWrapper FloorsPlansWrapper";
		gap: 50px;
		align-items: center;
		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`
const PictureWrapper = styled.div`
	grid-area: BuildingPicture;
	grid-column: span 1;
	grid-row: span 1;
	height: 100%;
`
const BuildingPicture = styled.img`
	max-height: 400px;
	height: 100%;
	width: 100%;
	object-fit: contain;
	object-position: center;
`
const LoadingWrapper = styled.div`
	margin-left: 10px;
`
const BuildingInformations = styled.div`
	grid-area: BuildingInformations;
	grid-column: span 1;
	grid-row: span 1;
`
const FloorsPlansWrapper = styled.div`
	grid-area: FloorsPlanWrapper;
	grid-column: span 2;
	grid-row: span 1;
`
const PlansList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-auto-rows: 1fr;
	gap: 50px;
	padding-top: 25px;
`
const PlanItem = styled(NavLink)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: inherit;
	font-size: 1rem;
`
const PlanPicture = styled.img`
	max-height: 200px;
	height: 100%;
	width: 100%;
	object-fit: contain;
	object-position: center;
`
const PlanTitle = styled.h3`
	font-size: 1rem;
	color: #00b0bd;
	margin-top: 10px;
`
