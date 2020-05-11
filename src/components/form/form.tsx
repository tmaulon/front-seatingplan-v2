import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Container } from "../container/container"
import { Button } from "../button/button"
/**
 * Form Documentation.
 *
 * @author [Thomas Maulon](https://github.com/tmaulon)
 * @version 1.0.1
 */
export const Form = () => {
	const firstTextInputRef = useRef<HTMLInputElement | null>(null)
	const secondTextInputRef = useRef<HTMLInputElement | null>(null)
	const selectInputRef = useRef<HTMLSelectElement | null>(null)
	const checkBoxInputRef = useRef<HTMLInputElement | null>(null)
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
	const submitRef = useRef<HTMLButtonElement | null>(null)
	const [firstTextInput, setFirstTextInput] = useState<string>("")
	const [secondTextInput, setSecondTextInput] = useState<string>("")
	const [selectInput, setSelectInput] = useState<string>("")
	const [checkBoxInput, setCheckBoxInput] = useState<boolean>(false)
	const [textArea, setTextArea] = useState<string>("")

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("Form submited : ", firstTextInput, secondTextInput, selectInput, checkBoxInput, textArea)
	}

	const changeFocusOnkeyPressed = (
		e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement>
	) => {
		if (e.keyCode === 13) {
			if (e.currentTarget.id === "firstTextInput") {
				secondTextInputRef.current?.focus()
			}
			if (e.currentTarget.id === "age") {
				selectInputRef.current?.focus()
			}
			if (e.currentTarget.id === "selectInput") {
				checkBoxInputRef.current?.focus()
			}
			if (e.currentTarget.id === "checkBoxInput") {
				textAreaRef.current?.focus()
			}
			if (e.currentTarget.id === "message") {
				submitRef.current?.focus()
			}
		}
	}

	// Uncomment this useEffect if you want focus the firstTextInput input when the component is mounted
	// useEffect(() => {
	// 	if (!firstTextInputRef || !firstTextInputRef.current) return;
	// 	firstTextInputRef.current.focus();
	// }, []);

	return (
		<FormContainer>
			<StyledForm onSubmit={submitForm}>
				<LeftPane>
					<FormControl isTextareaOrTextInput>
						<TextInput
							ref={firstTextInputRef}
							value={firstTextInput}
							id="firstTextInput"
							type="text"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstTextInput(e.currentTarget.value)}
							onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
								if (e.currentTarget.value !== "" && !e.currentTarget.classList.contains("filled")) {
									e.currentTarget.classList.add("filled")
								} else if (e.currentTarget.value === "" && e.currentTarget.classList.contains("filled")) {
									e.currentTarget.classList.remove("filled")
								}
							}}
							onKeyDown={changeFocusOnkeyPressed}
						/>
						<label htmlFor="firstTextInput">First text input : </label>
					</FormControl>
					<FormControl isTextareaOrTextInput>
						<TextInput
							ref={secondTextInputRef}
							value={secondTextInput}
							id="secondTextInput"
							type="text"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondTextInput(e.currentTarget.value)}
							onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
								if (e.currentTarget.value !== "" && !e.currentTarget.classList.contains("filled")) {
									e.currentTarget.classList.add("filled")
								} else if (e.currentTarget.value === "" && e.currentTarget.classList.contains("filled")) {
									e.currentTarget.classList.remove("filled")
								}
							}}
							onKeyDown={changeFocusOnkeyPressed}
						/>
						<label htmlFor="secondTextInput">Second text input : </label>
					</FormControl>
					<FormControl>
						<select
							ref={selectInputRef}
							value={selectInput}
							name="selectInput"
							id="selectInput"
							onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectInput(e.currentTarget.value)}
							onKeyDown={changeFocusOnkeyPressed}
						>
							<option value="optionn-1">Option 1</option>
							<option value="option-2">Option 2</option>
							<option value="option-3">Option 3</option>
						</select>
						<label htmlFor="selectInput">Select input : </label>
					</FormControl>
					<FormControl>
						<input
							ref={checkBoxInputRef}
							checked={checkBoxInput}
							id="checkBoxInput"
							type="checkbox"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckBoxInput(e.currentTarget.checked)}
							onKeyDown={changeFocusOnkeyPressed}
						/>
						<label htmlFor="checkBoxInput">Checkbox checked ? </label>
					</FormControl>
				</LeftPane>
				<div>
					<FormControl isTextareaOrTextInput>
						<TextareaInput
							ref={textAreaRef}
							name="textArea"
							id="textArea"
							value={textArea}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextArea(e.currentTarget.value)}
							onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
								if (e.currentTarget.value !== "" && !e.currentTarget.classList.contains("filled")) {
									e.currentTarget.classList.add("filled")
								} else if (e.currentTarget.value === "" && e.currentTarget.classList.contains("filled")) {
									e.currentTarget.classList.remove("filled")
								}
							}}
							onKeyDown={changeFocusOnkeyPressed}
						/>
						<label htmlFor="textArea">Text area : </label>
					</FormControl>
				</div>
				<SubmitButton buttonPrimary colorPrimary="#00b0bd" type="submit" id="submit" ref={submitRef}>
					Submit
				</SubmitButton>
			</StyledForm>
		</FormContainer>
	)
}
const FormContainer = styled(Container)`
	padding-bottom: 50px;
	box-sizing: border-box;
	& * {
		font-family: Arial, Helvetica, sans-serif;
	}
`
const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: repeat(auto, 1fr);
	grid-gap: 20px;
	box-sizing: border-box;
	& * {
		box-sizing: border-box;
	}
`
const LeftPane = styled.div`
	display: grid;
	grid-auto-rows: minmax(90px, 1fr);
`
const FormControl = styled.div<{
	isTextareaOrTextInput?: boolean
	filled?: boolean
}>`
	display: flex;
	flex-direction: ${(props) => (props.isTextareaOrTextInput ? "column-reverse" : "row-reverse")};
	align-items: ${(props) => (props.isTextareaOrTextInput ? "flex-start" : "center")};
	justify-content: ${(props) => (props.isTextareaOrTextInput ? "flex-start" : "space-between")};
	padding: 0;
	height: 100%;

	& > label {
		order: 1;
		transform: ${(props) => (props.isTextareaOrTextInput ? "translateY(1rem) translateX(.8rem) scale(0.8)" : "")};
		transform-origin: ${(props) => (props.isTextareaOrTextInput ? "left bottom" : "")};
		transition: transform 0.3s linear;
	}
	& > input.filled + label,
	& > textarea.filled + label,
	& > input:focus + label,
	& > textarea:focus + label,
	& > input:focus-within + label,
	& > textarea:focus-within + label {
		transform: ${(props) => (props.isTextareaOrTextInput ? "translateY(-0.8rem) translateX(0) scale(1)" : "")};
	}
`
const TextInput = styled.input.attrs((_props) => ({
	type: "text",
}))`
	/* reinitialize input style start*/
	-webkit-appearance: none;
	background-color: none;
	display: block;
	margin: 0;
	padding: 0;
	border: 0;
	font: unset;
	outline: none;
	/* reinitialize input style end */
	background-color: rgba(255, 255, 255, 0.2);
	color: #00b0bd;
	border-bottom: 1px solid #afb0b2;
	font-size: 1rem;
	width: auto;
	order: 0;
	padding: 15px 20px;
`
const TextareaInput = styled.textarea`
	/* reinitialize input style start*/
	-webkit-appearance: none;
	background-color: none;
	display: block;
	margin: 0;
	padding: 0;
	border: 0;
	font: unset;
	outline: none;
	/* reinitialize input style end */
	background-color: rgba(255, 255, 255, 0.2);
	color: #00b0bd;
	border-bottom: 1px solid #afb0b2;
	font-size: 1rem;
	order: 0;
	padding: 15px 20px;
	width: 100%;
	height: 90%;
`
const SubmitButton = styled(Button)`
	grid-column: span 2;
	justify-self: flex-end;
`
