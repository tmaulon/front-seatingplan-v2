import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { openingHomePageAnimationsVariants } from "../../App"

export const Footer = ({ isHomePage }: { isHomePage: boolean }) => {
	return (
		<StyledFooter
			variants={openingHomePageAnimationsVariants}
			animate={isHomePage ? "visible" : "visible"}
			initial={isHomePage ? "hidden" : "visible"}
			transition={{
				delay: 3,
				duration: 1,
				ease: "easeInOut",
			}}
		>
			<p>CESI Bordeaux RILA 11 • Seating Plan App • Groupe 2</p>
		</StyledFooter>
	)
}
const StyledFooter = styled(motion.footer)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: #282c34;
	color: #fff;
`
