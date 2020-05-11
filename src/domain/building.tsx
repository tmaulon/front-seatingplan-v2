import { RouteComponentProps } from "react-router-dom"

export interface IPicture {
	src: string
	alt: string
}
export interface ICollaborator {
	id: number
	firstname: string
	lastname: string
	deskId: number
}
export interface IPlan {
	id: number
	name: string
	picture?: IPicture
	collaborators: ICollaborator[]
	receptionMaxCapacity: number
	currentReceptionCapacity: number
}
export interface IBuilding {
	id: number
	name: string
	plans: IPlan[]
	receptionMaxCapacity: number
	currentReceptionCapacity: number
	officesNumber: number
	occupancyStatistics: number
	picture?: IPicture
}

export type IZoneSVG = Pick<IBuilding, "id" | "name">

export interface BuildingMatchParams {
	buildingId: string
}
export interface BuildingProps extends RouteComponentProps<BuildingMatchParams> {
	building: IBuilding
}
