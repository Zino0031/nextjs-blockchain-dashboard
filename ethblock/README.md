# Blockchain Dashboard

## Introduction
Welcome to the Blockchain Dashboard project! This project aims to provide a user-friendly and informative dashboard for displaying relevant data from a public blockchain. The dashboard is built using Next.js for the frontend framework, TailwindCSS for styling, and Jest for unit testing.

## Technology Stack
- Frontend Framework: Next.js
- CSS Framework: TailwindCSS
- Testing Framework: Jest


## Dashboard Design and Functionality
### User Interface
The dashboard is designed to be clean, intuitive, and user-friendly. It features a responsive layout and intuitive navigation to allow users to easily access and interact with blockchain data.

### Features
- View a list of past blocks with relevant information displayed in a tabular format.
- Filter or sort blocks based on specific criteria such as block height, timestamp, or number of transactions.
- View detailed information about individual blocks by clicking on them in the list.
- View charts and lists to visualize blockchain data trends.

## Documentation
### Design Choices
- Next.js was chosen for its server-side rendering capabilities, which improves performance and SEO.
- TailwindCSS was selected for its flexibility in designing responsive layouts and to make the code more clean .
- Jest was chosen for unit testing due to its simplicity and popularity within the React community.


### Implementation Details
- Components are structured using Next.js pages and React components for modularity and reusability.
- Styling is implemented using TailwindCSS to achieve a consistent and visually appealing design.

## Version Control
Git is used for version control, following the GitFlow branching model. The main branches include:
- **main**: Production-ready code.
- **develop**: Ongoing development branch.
- **feature/**: Feature branches for implementing new features.
- **bugfix/**: Bugfix branches for resolving issues.
- **release/**: Release branches for preparing releases.

Commits are made frequently to showcase the development process. Commit messages are descriptive and follow best practices for clarity and readability. Git Commitizen is used to enforce consistent commit message formatting and improve readability.



## Evaluation Criteria
- Code quality and adherence to best practices
- UI/UX design and user-friendliness
- Functionality and data accuracy
- Testing coverage and effectiveness
- Documentation clarity and completeness
- Version control history and commit messages


## How to Use
To use the Blockchain Dashboard, follow these steps:
1. Clone the repository
2. Create an environment file `.env` in the root directory and add your Moralis API key:
NEXT_PUBLIC_MORALIS_API_KEY=your_api_key_here
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:3000` to access the dashboard.
