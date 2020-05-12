import React from "react"
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "styled-components"
import { HomePage } from "./pages/home-page"
import { BuildingTemplatePage } from "./pages/building-template-page"
import { PlanTemplatePage } from "./pages/plan-template-page"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { motion } from "framer-motion"
import { FloorTemplatePage } from "./pages/floor-template-page"

export const AnimatedLayout: React.FC<{ title: string }> = ({ title, children }) => {
	return (
		<>
			<AnimatedDiv
				animate={{
					opacity: [1, 1, 1, 0],
					transitionEnd: {
						y: "-100%",
					},
				}}
				initial={{
					opacity: 1,
				}}
				transition={{
					times: [0, 0.25, 0.75, 1],
					duration: 3,
					ease: "easeInOut",
				}}
			/>
			<AnimatedContentWrapper
				animate={{
					opacity: [0, 1, 1, 0],
					transitionEnd: {
						y: "-100%",
					},
				}}
				initial={{ opacity: 0 }}
				transition={{
					times: [0, 0.25, 0.75, 1],
					duration: 2,
					ease: "easeInOut",
				}}
			>
				<TitleWrapper>
					<StyledTitle>{title}</StyledTitle>
				</TitleWrapper>
				{children}
			</AnimatedContentWrapper>
		</>
	)
}

const AnimatedDiv = styled(motion.div)`
	display: block;
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
`
const AnimatedContentWrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100vh;
	z-index: 1000;
`
const TitleWrapper = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`
const StyledTitle = styled.h1`
	height: auto;
	margin: 0 auto;
`

export const openingHomePageAnimationsVariants = {
	hidden: {
		opacity: 0,
		display: "none",
	},
	visibleContent: {
		opacity: 1,
		display: "block",
	},
	visible: {
		opacity: 1,
		display: "flex",
	},
}

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Route path="/" exact component={() => AnimatedLayout({ title: "Seating Plan" })} />
				<Header isHomePage={window.location.pathname === "/"} />
				<StyledMain>
					<Route path="/" exact component={HomePage} />
					<Route path="/building/building-:buildingId/" exact component={BuildingTemplatePage} />
					<Route path="/building/building-:buildingId/floor-:floorId" exact component={FloorTemplatePage} />
					<Route path="/building/building-:buildingId/floor-:floorId/plan-:planId" exact component={PlanTemplatePage} />
				</StyledMain>
				<Footer isHomePage={window.location.pathname === "/"} />
			</BrowserRouter>
		</>
	)
}
const StyledMain = styled.main`
	padding-top: 8vh;
`
