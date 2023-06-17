
const Square = ({colorValue, hexValue, isDarkColor}) => {
  return (
    <section
          className='square'
          style ={{
            backgroundColor :colorValue,
            color: isDarkColor ? '#000' : '#FFF'
          }}
    >
      <p>{colorValue ? colorValue: 'Enter a Color'}</p>
      <p>{hexValue ? hexValue: null}</p>
        </section>

  )
}
  Square.defaultProps ={
    colorValue: 'Empty Color Value'
  }
 
export default Square