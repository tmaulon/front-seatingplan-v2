import { RouteComponentProps } from "react-router-dom"

export interface IPicture {
	src: string
	alt: string
}
export interface ICollaborator {
	id: number
	firstName: string
	lastName: string
	password?: string
	deskId?: number
}
export interface IDesk {
	id: number
	name: string
	floorsNumber: number
	quantitePlaces: number
	customers: ICollaborator[]
	collaboratorsIds: number[]
}
export interface IPlan {
	id: number
	nom: string
	picture?: IPicture
	collaborators?: ICollaborator[]
	receptionMaxcapacity: number
	currentReceptionCapacity: number
	bureaux: IDesk[]
}
export interface IFloor {
	id: number
	plans: IPlan[]
}
export interface IBuilding {
	id: number
	nom: string
	etages: IFloor[]
	receptionMaxcapacity: number
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

export interface FloorMatchParams extends BuildingMatchParams {
	floorId: string
}
export interface FloorProps extends RouteComponentProps<FloorMatchParams> {
	floor: IFloor
}

export interface PlanMatchParams extends FloorMatchParams {
	planId: string
}
export interface PlanProps extends RouteComponentProps<PlanMatchParams> {
	plan: IPlan
}
