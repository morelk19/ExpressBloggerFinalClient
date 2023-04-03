import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

//importing four components 

import CreateBlog from "./components/CreateBlog";
import UpdateBlogInfo from './components/UpdateBlogInfo';
import ShowBlogList from './components/ShowBlogList';
import ShowBlogDetails from './components/ShowBlogDetails';


function App() {
	const [userMessage, setUserMessage] = useState("")

	//login and registration page

	const router = createBrowserRouter([
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "login",
					element: <LoginPage />
				},
				{
					path: "registration",
					element: <RegistrationPage />
				},
        {
					path: "show-blog/:id",
					element: <ShowBlogDetails />
				},
        {
					path: "create-blog",
					element: <CreateBlog />
				},
        {
					path: "showBlogList",
					element: <ShowBlogList />
				},
        {
					path: "edit-blog/:id",
					element: <UpdateBlogInfo />
				}
			],
		},
	]);

  return (
    <div className="App-header">
			<RouterProvider router={router} />
    </div>
  );
}

export default App;
