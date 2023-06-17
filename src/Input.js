import colorNames from 'colornames'

function Input({ 
  colorValue, setColorValue, setHexValue, isDarkColor, setIsDarkColor 
}) {
  return (
    <form 
      onSubmit={(e) => e.preventDefault()}>
      <label>Enter a color Name </label>
      <input 
        autoFocus
        type="text"
        required
        placeholder= 'Add Color Name'
        value={colorValue}
        onChange={(e) => {
          setHexValue(colorNames(e.target.value))
          setColorValue(e.target.value)}}
    />
    <button
      type='button'
      onClick={() => setIsDarkColor(!isDarkColor)} 
    >
      Toggle Text Color
    </button>
    </form>
  )
}

export default Input