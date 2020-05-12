import React from "react"
import styled from "styled-components"

export const Footer = () => {
	return (
		<StyledFooter>
			<p>CESI Bordeaux RILA 11 • Seating Plan App • Groupe 2</p>
		</StyledFooter>
	)
}
const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: #282c34;
	color: #fff;
`
