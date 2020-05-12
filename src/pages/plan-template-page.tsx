import React, { useState, useEffect } from "react"
import "../App.css"
import styled, { keyframes } from "styled-components"
import { Container } from "../components/container/container"
import { useCustomfetch } from "../hooks/useCustomFetch"
import { FakeBuildingsData } from "../content/fake-buildings-data"
import { IBuilding, PlanProps, IPlan } from "../domain/building"
import { Button } from "../components/button/button"
import { motion } from "framer-motion"

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

export const PlanTemplatePage: React.FC<PlanProps> = ({ match }) => {
	const fakeBuildings: IBuilding[] = FakeBuildingsData
	const [fakeBuilding, setFakeBuilding] = useState<IBuilding>()
	const [fakePlan, setFakePlan] = useState<IPlan>()
	const [collaboratorsListOpen, setCollaboratorsListOpen] = useState(false)
	const [url, setUrl] = useState<string>("")
	const { data, loading, error } = useCustomfetch(url)

	const getAllBuildingsData = () => {
		// test fetching Github API
		// setUrl(`https://api.github.com/users/tmaulon`)
		setUrl(`/api/1.0/batiment`)
	}

	useEffect(() => {
		getAllBuildingsData()
	}, [])

	useEffect(() => {
		if (!fakeBuilding) return
		setFakePlan(fakeBuilding.plans.find(({ id }) => id === parseInt(match.params.planId)))
	}, [fakeBuilding, match.params.planId])

	useEffect(() => {
		setFakeBuilding(fakeBuildings.find(({ id }) => id === parseInt(match.params.buildingId)))
	}, [fakeBuildings, match.params.buildingId])

	return (
		<>
			{fakePlan && fakeBuilding && (
				<PresentationSection>
					<Container>
						<PictureWrapper>
							<BuildingPicture
								src={`${
									fakePlan.picture && fakePlan.picture.src
										? process.env.PUBLIC_URL + fakePlan.picture.src
										: process.env.PUBLIC_URL + "/images/buildings/plan-placeholder.png"
								}`}
								alt={`${
									fakePlan.picture && fakePlan.picture.alt ? fakePlan.picture.alt : `Image du Plan ${fakePlan.name}`
								}`}
							/>
						</PictureWrapper>
						<PlanInformations>
							<h1>{`Plan de ${fakePlan.name} du ${fakeBuilding.name}`}</h1>
							<p>
								Bienvenu sur le plan {fakePlan.name} du bâtiment {fakeBuilding.name} :
							</p>
							<PlanDetails>
								<li>
									Id : <strong>{fakePlan.id}</strong>
								</li>
								<li>
									Nom du plan : <strong>{fakePlan.name}</strong>.
								</li>
								<li>
									Nombre de collaborateurs à cet étage : <strong>{fakePlan.collaborators.length}</strong>.
								</li>
								<li>
									Peut accueillir <strong>{fakePlan.receptionMaxCapacity}</strong> bureaux.
								</li>
								<li>
									Est actuellement agencé pour contenir <strong>{fakePlan.currentReceptionCapacity}</strong> bureaux.
								</li>
							</PlanDetails>
						</PlanInformations>
						<CollaBoratorsDetailsWrapper>
							<Button onClick={() => setCollaboratorsListOpen(!collaboratorsListOpen)}>
								{collaboratorsListOpen
									? `Refermer la liste des collaborateurs`
									: `Voir les collaborateurs présents à cet étage`}
							</Button>
							<CollaboratorsDetails
								variants={animatedContainerWithStaggerChildrenVariants}
								initial={collaboratorsListOpen ? "visible" : "hidden"}
								animate={collaboratorsListOpen ? "visible" : "hidden"}
							>
								{fakePlan.collaborators.map((c, i) => (
									<motion.li key={`${c.id}-${i}`} variants={animatedItemStaggerChildVariants}>
										Le Collaborateur, avecl'id <strong>{c.id}</strong>, et s'appellant{" "}
										<strong>{`${c.firstname} ${c.lastname}`}</strong>, est installé sur le bureau avec l'id{" "}
										<strong>{c.deskId}</strong>
									</motion.li>
								))}
							</CollaboratorsDetails>
						</CollaBoratorsDetailsWrapper>
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
				{!loading && data && <pre>{JSON.stringify(data, null, 2)}</pre>}
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

const fadeIn = keyframes`
  0% {
	  opacity: 0;
	}
	100% {
		opacity: 1;
  }
`
const CollaboratorsDetails = styled(motion.ul)`
	list-style-type: none;
	& strong {
		color: #00b0bd;
	}
	& > li {
		/* animation: 1s ${fadeIn} ease-in-out; */
	}
`
