import React, { useState } from "react"
import "./App.css"
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import styled from "styled-components"
import { Button } from "./components/button/button"
import { HomePage } from "./pages/home-page"
import { BuildingTemplatePage } from "./pages/building-template-page"
import { PlanTemplatePage } from "./pages/plan-template-page"
import { Footer } from "./components/footer/footer"

export const App = () => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false)

	return (
		<BrowserRouter>
			<AppHeader>
				<NavList>
					<NavItem>
						<StyledLink to="/" exact activeClassName="active">
							Home
						</StyledLink>
					</NavItem>
					<NavItem>
						<Button buttonPrimary colorPrimary="#00b0bd" onClick={() => setLoggedIn(!loggedIn)}>
							{loggedIn ? "logOut" : "LogIn"}
						</Button>
					</NavItem>
				</NavList>
			</AppHeader>
			<StyledMain>
				<Route path="/" exact component={HomePage} />
				<Route path="/building/building-:buildingId/" exact component={BuildingTemplatePage} />
				<Route path="/building/building-:buildingId/plan-:planId" exact component={PlanTemplatePage} />
			</StyledMain>
			<Footer />
		</BrowserRouter>
	)
}
const AppHeader = styled.header`
	background-color: #16191d;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
`
const NavList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin: 0;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
	}
`
const NavItem = styled.li`
	margin: 0;
	padding: 0;
	margin: 0;
	&:not(:last-child) {
		@media screen and (min-width: 1024px) {
			margin: 0 30px 0 0;
		}
	}
`
const StyledLink = styled(NavLink)`
	color: #fff;
	padding: 10px;
	text-decoration: none;
	position: relative;
	transition: color 0.3s ease-out;

	&::after {
		content: "";
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background-color: #fff;
		transform: scaleX(0.2);
		transform-origin: center;
		transition: transform 0.3s ease-out, background-color 0.3s ease-out;
	}
	&:hover,
	&:focus,
	&.active {
		color: #00b0bd;
		&::after {
			transform: scaleX(1);
			background-color: #00b0bd;
		}
	}
`
const StyledMain = styled.main`
	padding-top: 8vh;
`
