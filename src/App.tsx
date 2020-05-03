import React, { useEffect, useState } from "react"
import "./App.css"
import { BuildingsZonesSection } from "./components/buildings-zones-section"
import { IBuilding } from "./components/building-card"

const FakeBuildingsData: IBuilding[] = [
	{
		id: "batiment-a",
		name: "Bâtiment A",
		floorsNumber: 4,
		collaboratorsNumber: 64,
		receptionMaxCapacity: 64,
		currentReceptionCapavity: 64,
		officesNumber: 64,
		occupancyStatistics: 100,
		picture: {
			src: "/images/buildings/batiment-a.png",
			alt: "Image du Bâtiment A",
		},
	},
	{
		id: "batiment-b",
		name: "Bâtiment B",
		floorsNumber: 4,
		collaboratorsNumber: 64,
		receptionMaxCapacity: 64,
		currentReceptionCapavity: 64,
		officesNumber: 64,
		occupancyStatistics: 100,
		picture: {
			src: "/images/buildings/batiment-b.png",
			alt: "Image du Bâtiment B",
		},
	},
]

function App() {
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
		<div className="App">
			<header className="App-header">
				<h1>Seating Plan App</h1>
			</header>
			<main>
				<section>
					<h2>Fetch All User data</h2>
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</section>
				<BuildingsZonesSection buildings={FakeBuildingsData} />
			</main>
		</div>
	)
}

export default App
