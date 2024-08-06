# Let's deep dive into this Project

# Overview

## The Dynamic Post Page application allows users to create and preview posts with text and images. It supports toggling between light and dark modes for better visibility and user experience. The application consists of a frontend built with React and a backend server for image processing.

### Features

1. Post Creation: Users can input a title, content, and upload an image for their post.
2. Post Preview: A live preview of the post is displayed as the user types.
3. Dark Mode Toggle: Users can switch between light and dark modes for better readability.
4. Open Graph Image Generation: The backend generates an Open Graph (OG) image for the post, which can be used for social media sharing.

## File Structure

### frontend: Contains the React application.

- src
- components

- PostForm.jsx: Form component for post creation.
- App.css: Main CSS file with styles for light and dark modes.
- PostPage.jsx: Main page component handling the post creation and preview.
- backend: Contains the server code for generating OG images.

## Key Components

- App.css

### Contains the styles for both light and dark modes. Key styles include:

- General Styles: Basic styles for layout and aesthetics.
- Dark Mode Styles: Styles specific to dark mode for background and text colors.

### PostPage.jsx

Main component handling the post creation and preview. Key functionalities include:

- State Management: Manages the state for the post, OG image URL, and dark mode.
- Event Handlers: Functions for handling input changes, file uploads, and dark mode toggling.
- Effects: useEffect hook to update the body's background color based on the dark mode state.

### PostForm.jsx

Form component for creating a post. It includes:

- Form Inputs: Text inputs for title and content, and a file input for image upload.
- Change Handlers: Functions to update the post state based on user inputs.

## Usage

1. Start the Backend Server:

- cd backend
- node server.js

2. Start the Frontend Development Server:

- cd ../dynamic-post-page
- npm start

3. Create a Post:

- Navigate to the running frontend application.
- Enter the title and content of the post.
- Upload an image if you want to.
- The live preview of the post will be displayed automatically.

4. Toggle Dark Mode:

- Click the "Switch to Dark Mode" button to switch to dark mode.
- Click the "Switch to Light Mode" button to switch back to light mode.

## Technical Details

- React: The frontend is built using React functional components and hooks.
- CSS: Styles are defined in App.css with specific classes for light and dark modes.
- Backend: The backend server (assumed to be a Node.js/Express server) handles the generation of OG images.

</br>
</br>
</br>
</br>
</br>
<center>************************** Thank You *********************</center>
