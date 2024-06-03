import colorNames from "colornames"

export const Input = ({
    colorValue, setColorValue, setHexValue,
    isDarkText, setIsDarkText
}) => {
    return (
        <form
            action=""
            onSubmit={(e) => e.preventDefault()}>

            <label htmlFor="">Add color name:</label>
            <input
                type="text"
                autoFocus
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle text color
            </button>
        </form>
    )
}
