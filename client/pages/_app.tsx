import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { Alert } from "../components/alter/Alert"
import store from "../redux/store"
import "../styles/globals.css"
import "aos/dist/aos.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Alert />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
