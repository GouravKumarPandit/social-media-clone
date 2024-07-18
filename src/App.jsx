import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Component
import Header from './components/Header.jsx';
import Posts from './components/Posts.jsx';
import CreatePost from './components/CreatePost.jsx';
import NoPostMessage from './components/NoPostMessage.jsx';
import MainContainer from './components/Container/MainContainer.jsx';
import Footer from './components/Footer.jsx';

// Importing react component
import { useState } from 'react';

function App() {
	// Creating Post Object

	let [allPosts, handleAllPostsRequest] = useState([
		{
			ID: 123456,
			post_title: "Hello First Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 2,
			post_title: "Hello Second Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 3,
			post_title: "Hello Third Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 4,
			post_title: "Hello Four Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 5,
			post_title: "Hello Five Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 6,
			post_title: "Hello Six Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 7,
			post_title: "Hello Seven Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
		{
			ID: 8,
			post_title: "Hello Eight Post",
			post_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			post_tags: ["Hello","First","Post"],
			post_reactions: 100
		},
	]);

	const addNewPost = (newPost) => {
		let newPostArray = [...allPosts, newPost]
		handleAllPostsRequest(newPostArray);
		handleSidebarActive("Home");
	}

	let [sidebarActive, handleSidebarActive] = useState("Home");

	const changeSidebarActive = (sideBarButton) => {
		handleSidebarActive(sideBarButton);
	} 

	return (
		<MainContainer>
			<Header changeSidebarActive={changeSidebarActive} />
			{(allPosts.length === 0 && sidebarActive !== "Create Post") && <NoPostMessage />}
			{sidebarActive === "Create Post" && <CreatePost addPost={addNewPost} />}
			{(sidebarActive === "Home" || sidebarActive === "All Posts") && <Posts allPosts={allPosts} />}
			<Footer />	
		</MainContainer>
	);
}

export default App;
