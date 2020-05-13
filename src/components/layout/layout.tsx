import React, { ReactNode } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"

export const AnimatedSplashScreen: React.FC<{ title: string }> = ({ title, children }) => {
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

export interface LayoutProps {
	isHomePage?: boolean
	children: ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ isHomePage, children }) => {
	return (
		<>
			{isHomePage && <AnimatedSplashScreen title="Seating Plan" />}

			<Header isHomePage={isHomePage} />
			<StyledMain>{children}</StyledMain>
			<Footer isHomePage={isHomePage} />
		</>
	)
}
const StyledMain = styled.main`
	padding-top: 8vh;
`
