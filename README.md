# Portfolio Website

This portfolio website showcases four projects, each featuring images and videos. The website is built using React and provides a clean and modern interface for displaying project details.

## Project Structure

```
portfolio-website
├── public
│   ├── images          # Directory for project images
│   ├── videos          # Directory for project videos
│   └── index.html      # Main HTML document
├── src
│   ├── components
│   │   └── ProjectCard.jsx  # Component for displaying project details
│   ├── App.jsx          # Main React component
│   └── styles
│       └── main.css     # CSS styles for the website
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

- The main page is located at `public/index.html`.
- Add project images to the `public/images` directory.
- Add project videos to the `public/videos` directory.
- Modify `src/components/ProjectCard.jsx` to update project details such as title, description, image, and video.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.