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
export interface IDesk {
	id: number
	name: string
	floorsNumber: number
	quantitePlaces: number
	estOccupe: boolean
	collaboratorsIds?: number[]
}
export interface IPlan {
	id: number
	nom: string
	picture?: IPicture
	collaborators?: ICollaborator[]
	receptionMaxCapacity: number
	currentReceptionCapacity: number
	bureaux: IDesk[]
}
export interface IFloor {
	plans: IPlan[]
}
export interface IBuilding {
	id: number
	nom: string
	etages: IFloor[]
	plans?: IPlan[]
	receptionMaxCapacity: number
	currentReceptionCapacity: number
	officesNumber: number
	occupancyStatistics: number
	picture?: IPicture
}

export type IZoneSVG = Pick<IBuilding, "id" | "nom">

export interface BuildingMatchParams {
	buildingId: string
}
export interface BuildingProps extends RouteComponentProps<BuildingMatchParams> {
	building: IBuilding
}

export interface PlanMatchParams extends BuildingMatchParams {
	planId: string
}
export interface PlanProps extends RouteComponentProps<PlanMatchParams> {
	plan: IPlan
}
