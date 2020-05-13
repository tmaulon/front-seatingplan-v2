import React, { useState, useEffect } from "react"
import "../App.css"
import styled, { keyframes } from "styled-components"
import { Container } from "../components/container/container"
import { useCustomfetch } from "../hooks/useCustomFetch"
import { FakeBuildingsData } from "../content/fake-buildings-data"
import { IBuilding, PlanProps, IPlan, FloorProps, IFloor } from "../domain/building"
import { Button } from "../components/button/button"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Layout } from "../components/layout/layout"

const animatedContainerWithStaggerChildrenVariants = {
	hidden: {
		opacity: 1,
		scale: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.1,
		},
		transitionEnd: {
			display: "none",
		},
	},
	visible: {
		display: "block",
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.1,
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
}

const animatedItemStaggerChildVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

export const FloorTemplatePage: React.FC<FloorProps> = (props) => {
	const { match } = props
	const fakeBuildings: IBuilding[] = FakeBuildingsData
	const [fakeBuilding, setFakeBuilding] = useState<IBuilding>()
	const [fakeFloor, setFakeFloor] = useState<IFloor>()
	const [collaboratorsListOpen, setCollaboratorsListOpen] = useState(false)
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

		if (!fakeBuilding) return
		const getSelectedFloor = fakeBuilding.etages.find((etage) => etage.id === parseInt(match.params.floorId))

		console.log("setlected plan ", getSelectedFloor)
		if (!getSelectedFloor) return
		setFakeFloor(getSelectedFloor)
	}, [fakeBuilding, match.params.floorId])

	return (
		<>
			{fakeFloor && fakeBuilding && (
				<PresentationSection>
					<Container>
						<h1>Vous êtes à l'étage : {fakeFloor.id}</h1>
						{fakeFloor.plans.length > 0 ? (
							<p>
								Vous pouvez voir les différentes configurations de cet étage. A ce jour, il y a {fakeFloor.plans.length}{" "}
								{fakeFloor.plans.length > 1 ? "" : "seul"} plan{fakeFloor.plans.length > 1 ? "s." : "."}
							</p>
						) : (
							<p>Il n'y a toujuors pas de plan pour cet étage</p>
						)}
						<ul>
							{fakeFloor.plans.map((plan, i) => (
								<li>
									<NavLink
										title={`Voir le plan ${plan.nom}`}
										to={`/building/building-${fakeBuilding.id}/floor-${fakeFloor.id}/plan-${plan.id}`}
									>
										Voir le plan {plan.nom}
									</NavLink>
								</li>
							))}
						</ul>
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

export const FloorTemplatePageWithLayout: React.FC<FloorProps> = ({ ...props }) => {
	return (
		<Layout>
			<FloorTemplatePage {...props} />
		</Layout>
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
		grid-template-rows: 1fr;
		grid-template-areas: "PlanPicture PlanInformations";
		gap: 50px;
		align-items: center;
		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`
const PictureWrapper = styled.div`
	grid-area: PlanPicture;
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
const PlanInformations = styled.div`
	grid-area: PlanInformations;
	grid-column: span 1;
	grid-row: span 1;
`
const PlanDetails = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
	& strong {
		color: #00b0bd;
	}
`
const CollaBoratorsDetailsWrapper = styled.div`
	grid-column: span 2;
	justify-self: center;
	align-self: center;
	& > button {
		margin: 0 auto;
	}
`
const CollaboratorsDetails = styled(motion.ul)`
	list-style-type: none;
	& strong {
		color: #00b0bd;
	}
`
