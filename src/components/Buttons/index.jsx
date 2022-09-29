import "./styles.css"


const Buttons = ({ handleClickNext, handleClickPrev}) => {
    return (
        <div className="buttons">
            <button onClick={handleClickPrev} className="btn btn-prev">Prev &lt;</button>
            <button onClick={handleClickNext}  className="btn btn-next">Next &gt;</button>
        </div>
    )
}
export default Buttons