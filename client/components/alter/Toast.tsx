import { useDispatch } from "react-redux"
import { ALERT } from "../../redux/types/alertType"
interface IProps {
  title: string
  body: string | string[]
  bgColor: string
}
const Toast = ({ title, body, bgColor }: IProps) => {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch({ type: ALERT, payload: {} })
  }
  setTimeout(() => {
    dispatch({ type: ALERT, payload: {} })
  }, 3000)
  return (
    <div
      className={`fixed text-white px-4 ${bgColor}`}
      style={{
        top: "5px",
        right: "5px",
        zIndex: 999,
        minWidth: "200px"
      }}
    >
      <div className={`flex justify-between text-white ${bgColor}`}>
        <strong className="me-auto">{title}</strong>
        <button type="button" className="pr-4" onClick={handleClose}>
          X
        </button>
      </div>
      <div className="toast-body">
        {typeof body === "string" ? (
          body
        ) : (
          <ul>
            {body.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Toast
