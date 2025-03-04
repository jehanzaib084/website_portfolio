# Professional Portfolio Project

> [!Welcome]
> Welcome to my Portfolio Project.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Portfolio Website Customization Guide](#customization-guide)

## Features

- Central Repository: A single place to explore all my projects, testimonials, and relevant data.

- Fullstack Development: Demonstrates proficiency in both frontend and backend technologies.

- User-Centered Design: Focuses on creating intuitive and engaging user interfaces.

- Continuous Learning: Reflects my commitment to staying updated with the latest industry trends.

- Data Management: Uses Sanity CMS to manage and store all content.

## Technologies Used

- Frontend

  - NextJS
  - Typescript
  - Tailwind

- Contact Form

  - EmailJs (for handling contact form submissions)

- Content Management

  - Sanity

- Tools & Platform
  - Git & Github
  - Vercel

## Project Structure

```
website_portfolio/
│
├── public/
│ ├── index.html
│ └── assets/
│ └── ... (other assets and images)
│
├── sanity/
│ ├── config/
│ │ └── client-config.ts
│ ├── schema/
│ │ └── ... (various schema files)
│ └── sanity-utils.ts
│
├── src/
│ ├── animations/
│ │ └── fadeUp.tsx
│ ├── app/
│ │ └── ... (other files and folders within src)
│ └── ... (other nested files and folders within src)
│
├── types/
│ └── ... (type definitions)
│
├── .env.example
├── .gitignore
├── .prettierrc
├── ... (other files and folders)
└── README.md
```

# Portfolio Website Customization Guide

> [!NOTE]
> This guide helps you understand how to customize various parts of your website, including both static content and dynamic content from Sanity CMS.

## Table of Contents

- [Hero Section](#hero-section)
- [Services Section](#services-section)
- [Projects Section](#projects-section)
- [Profile Section](#profile-section)
- [Footer Section](#footer-section)
- [Contact Information](#contact-information)
- [Sanity CMS Integration](#sanity-cms-integration)

## Hero Section

### Modifying Hero Content

```typescript
// File: Hero.tsx
export default function Hero() {
    return (
        <section>
            <h1>
                <GradientTxt tagName="span" txt="AI That Works Smarter," />
                So You Don't Have To.
            </h1>
            <p>
                Hi! I'm Sania, an AI & ML Engineer...
            </p>
        </section>
    );
}
```

- Open `Hero.tsx`
- Locate the `h1` and `p` tags
- Modify content as needed

## Services Section

### Dynamic Services Content

```typescript
// File: Services.tsx
export default function Services() {
    const [services, setServices] = useState<Services[]>([]);
    // Fetches services from Sanity CMS
}
```

- Services content is managed via Sanity CMS
- Update through Sanity dashboard

## Projects Section

### Managing Projects

```typescript
// File: Projects.tsx
export default function Projects() {
    return (
        <section>
            <h2>
                <GradientTxt tagName="span" txt="Innovative Side Projects" />
                {/* Change heading text here */}
            </h2>
        </section>
    );
}
```

```typescript
// File: Swiper.tsx
export default function AnimatedSlide() {
    const [projects, setProjects] = useState<Project[]>([]);
    // Fetches projects from Sanity CMS
}
```

- To modify project heading, update the `txt` prop in `GradientTxt` component
- Projects content managed through Sanity CMS

## Profile Section

### Customizing Profile Information

```typescript
// File: ProfileInfo.tsx
export default function ProfileInfo() {
    return (
        <div className="profile-container">
            <Image
                src="/images/profile.jpg" // Change image path here
                alt="Profile Picture"
                width={300}
                height={300}
            />
        </div>
    );
}
```

- To update profile picture:
  1. Add new image to `/public/images/` directory
  2. Update the `src` path in `ProfileInfo.tsx`
  3. Maintain same aspect ratio for best results

## Footer Section

### Footer Customization

```typescript
// File: Footer.tsx
export default function Footer() {
    return (
        <footer>
            <GradientTxt tagName="h2" txt="FAQ" />
            <h3>Frequently Asked Questions</h3>
            {/* Other footer content */}
        </footer>
    );
}
```

## Contact Information

### Updating Social Links and Contact Details

```typescript
// File: Contact/Contact.tsx
export default function ContactDetails() {
    return (
        <div>
            <div className="social-links">
                <a href="https://github.com/yourusername">GitHub</a>
                <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
                <a href="mailto:your.email@domain.com">Email</a>
            </div>
            
            <div className="contact-info">
                <p>Phone: +1234567890</p>
                <p>Location: Your City, Country</p>
            </div>
        </div>
    );
}
```

To update contact information:

1. Open `src/app/components/Footer/Contact/Contact.tsx`
2. Locate the social links section
3. Update href values with your social media profiles
4. Modify contact details in the contact-info section
5. Save changes

## Sanity CMS Integration

### Content Management Steps

1. **Access Dashboard**
     - Login to Sanity CMS
     - Navigate to desired section

2. **Content Updates**
     - Select content to modify
     - Make necessary changes
     - Publish updates

3. **Content Types**
     - Projects
     - Services
     - FAQs
     - Profile Information

> [!TIP]
> Always preview changes before publishing to ensure proper display on the website.

> [!IMPORTANT]
> After updating social links or contact information, test all links to ensure they work correctly.

