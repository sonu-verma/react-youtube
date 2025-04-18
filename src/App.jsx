import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainVideoContainer from "./components/body/MainVideoContainer"
import VideoDetailPage from "./components/body/videocontainer/VideoDetailPage"
import ErrorPage from "./components/ErrorPage"
import Trending from "./components/body/trending/Trending"

function App() {

  const appRouting = createBrowserRouter([
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainVideoContainer />
          }, {
            path: "/watch",
            element: <VideoDetailPage />
          }, {
            path: "/trending",
            element: <Trending />
          }
        ],
        errorElement: <ErrorPage />
    }
  ])

  return (
    <>
      <Provider store={store}>
        <div className="">
          <Head />
          <RouterProvider router={appRouting} />
          {/* <Body /> */}
        </div>
      </Provider>
    </>
  )
}

export default App
