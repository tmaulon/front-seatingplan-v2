import { useState, useEffect } from "react"

export const useCustomfetch = (url: string) => {
	const [data, setData] = useState()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState<boolean | null>(null)

	const customFetch = async (url: string) => {
		try {
			const response = await fetch(url)
			const responseData = await response.json()
			if (!responseData) {
				return
			} else {
				setData(responseData)
			}
			setLoading(false)
		} catch (e) {
			console.error(e)
			setError(e)
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			if (url) {
				customFetch(url)
			}
		}, 3000)
	}, [url])

	return { data, loading, error }
}
