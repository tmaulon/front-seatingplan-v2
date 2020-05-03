import React, { ReactNode } from "react"
import styled from "styled-components"

export const Container = ({ children }: { children: ReactNode }) => <Wrapper>{children}</Wrapper>
export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 100%;
	padding: 0 48px;
	@media screen and (min-width: 576px) {
		padding: 0;
		max-width: 540px;
	}
	@media screen and (min-width: 768px) {
		max-width: 720px;
	}
	@media screen and (min-width: 992px) {
		max-width: 960px;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1140px;
	}
`
