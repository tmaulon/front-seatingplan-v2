import React from "react"
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import { HomePageWithLayout } from "./pages/home-page"
import { BuildingTemplatePageWithLayout } from "./pages/building-template-page"
import { PlanTemplatePageWithLayout } from "./pages/plan-template-page"
import { FloorTemplatePageWithLayout } from "./pages/floor-template-page"

export const App = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={HomePageWithLayout} />
			<Route path="/building/building-:buildingId/" exact component={BuildingTemplatePageWithLayout} />
			<Route path="/building/building-:buildingId/floor-:floorId" exact component={FloorTemplatePageWithLayout} />
			<Route
				path="/building/building-:buildingId/floor-:floorId/plan-:planId"
				exact
				component={PlanTemplatePageWithLayout}
			/>
		</BrowserRouter>
	)
}
