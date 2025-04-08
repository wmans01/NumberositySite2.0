# NumberosityWebsite2.0

The new website for Numberosity Academy, with the aims of revamping the UI and UX, as well as modernizing the CSS and JS logic.

### Running Locally

1. Make sure you have a compatible version of [nodeJS](https://nodejs.org/en) installed.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the dev server on `localhost:5173`.

### Changelog

The following is an incomplete changelog of the differences from the old WordPress website.

#### Fundamental changes

- [Vite](https://vite.dev/) as a framework, instead of vanilla JS
- [Tailwind CSS V4](https://tailwindcss.com/) instead of raw CSS and style tags
- [React](https://react.dev/) instead of raw HTML
- [React Router](https://reactrouter.com/) for routing
- Hosted with [Vercel](https://vercel.com/)

#### UI Changes / Improvements

- Modern, responsive design with mobile-first approach
- Interactive timeline showcasing key events
- Dynamic sponsor showcase with hover effects
- Smooth animations and transitions
- Consistent typography using Roboto font family
- Improved navigation with mobile-friendly menu
- Social media integration
- Clean, professional layout with proper spacing
- Standardized page descriptions with blue-tinted textboxes
- Optimized image loading with lazy loading and proper attributes
- Interactive confetti effects for sponsorship tiers

#### Component Structure

- **Home**: Main landing page with hero section, about us, timeline, and sponsors
- **Timeline**: Interactive timeline component showing key events
- **Sponsors**: Grid layout for sponsor showcase with hover effects
- **Navigation**: Responsive header with mobile menu
- **Footer**: Consistent footer across all pages
- **Image**: Reusable optimized image component with lazy loading
- **News**: Article grid with optimized image loading
- **Join**: Interactive sections for volunteering and team applications
- **Donate**: Dynamic sponsorship tiers with confetti effects

#### Recent Updates

- Updated typography to use Roboto font family
- Implemented consistent font weights (bold for titles, regular for content)
- Improved responsive design for all components
- Added interactive elements and hover effects
- Enhanced accessibility and user experience
- Standardized page descriptions across all sections
- Implemented image optimization with lazy loading
- Added confetti effects to sponsorship tiers
- Created reusable Image component for consistent image handling
- Optimized iframe loading and styling
- Enhanced page transitions and animations

#### Performance Optimizations

- Implemented lazy loading for all images
- Added proper image attributes for better loading performance
- Created reusable Image component for consistent optimization
- Standardized page layouts for better maintainability
- Optimized iframe loading and rendering
- Enhanced component reusability across pages

### Contributing

This section provides guidelines for adding new content to the website. Please follow these instructions carefully to maintain consistency and quality.

#### Adding News Articles

1. Create a new article in `src/components/pages/news/NewsArticle.jsx`
2. Follow the existing article structure:
   - Add a new case in the `getArticleContent` function
   - Include all required fields: title, date, content, and image
   - Ensure images are added to `/public/news/` with appropriate naming
3. Update the `News.jsx` component to include the new article in the grid
4. Test the article display and ensure proper formatting

#### Adding Courses

1. Navigate to `src/components/pages/courses/CoursePage.jsx`
2. Add a new course case in the `getCourseContent` function
3. Include all required information:
   - Course title and description
   - Prerequisites
   - Learning outcomes
   - Schedule and duration
   - Registration details
4. Update the course listing in the main courses page

#### Adding Outreach Programs

1. For new outreach programs, create a new component in `src/components/pages/outreach/`
2. Follow the existing structure of `RoboBridge.jsx` or `RoboLight.jsx`
3. Include:
   - Program description
   - Target audience
   - Program goals
   - Implementation details
   - Contact information
4. Update the outreach page to include the new program
5. Add any program-specific images to `/public/outreach/`

#### Adding Summer Programs

1. Navigate to `src/components/pages/summer/Summer2025.jsx`
2. Add new program details in the appropriate section
3. Include:
   - Program dates and times
   - Age groups and eligibility
   - Program activities
   - Registration process
   - Cost and payment information
4. Update any relevant images or assets
5. Ensure all links and contact information are current

#### Adding Teams and Team Members

1. Navigate to `src/components/pages/teams/TeamPage.jsx`
2. Add a new team case in the `getTeamContent` function
3. Include all required information:
   - Team name and number
   - Team description and achievements
   - Team members with their roles
   - Competition history
   - Team photos and media
4. For team members, include:
   - Full name
   - Role/position
   - Grade level
   - Years of experience
   - Special achievements
5. Add team-specific images to `/public/teams/` with appropriate naming:
   - Team photos: `team-[number]-group.jpg`
   - Individual photos: `team-[number]-[firstname].jpg`
   - Competition photos: `team-[number]-competition-[event].jpg`
6. Update the main teams page to include the new team
7. Ensure all team member information is current and accurate

#### General Guidelines

1. **Images**:

   - Use high-quality images
   - Optimize images before adding them
   - Place all images in `/public/`
   - Use descriptive filenames

2. **Content Formatting**:

   - Follow existing styling patterns
   - Use consistent heading hierarchy
   - Maintain proper spacing and alignment
   - Ensure mobile responsiveness

3. **Testing**:

   - Test all new content on different screen sizes
   - Verify all links and navigation
   - Check image loading and optimization
   - Ensure proper SEO implementation

4. **Commit Messages**:
   - Use clear, descriptive commit messages
   - Reference the type of content being added
   - Include any relevant issue numbers

For any questions or clarifications, please email me at jeremywang08@gmail.com
