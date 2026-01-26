export const siteData = {
  brand: {
    name: "Nextgin Construction",
    tagline: "Quality construction. Built to last.",
   
  },
  ctas: {
    primary: { label: "Request a Quote", href: "#contact" },
    secondary: { label: "View Projects", href: "#projects" },
  },
  about: {
    title: "Built on craftsmanship and communication",
    body:
      "Nextgin Construction delivers dependable construction services for homeowners and businesses. From renovations to new builds, we focus on quality work, clear timelines, and a job done right the first time.",
    bullets: ["Clear estimates", "Reliable scheduling", "Clean job sites", "Quality materials"],
  },
  services: {
    title: "Services",
    items: [
      { title: "New Construction", desc: "From planning to punch-list, we build with precision and pride." },
      { title: "Renovations", desc: "Upgrade kitchens, bathrooms, basements, and whole-home interiors." },
      { title: "Additions", desc: "Expand your living space with seamless, code-compliant additions." },
      { title: "Framing & Structural", desc: "Solid framing, repairs, and structural improvements you can trust." },
      { title: "Finish Work", desc: "Trim, doors, flooring, and details that elevate the final look." },
      { title: "Commercial Buildouts", desc: "Functional, durable buildouts for local businesses and spaces." },
    ],
  },
  projects: {
    title: "Recent Projects",
    subtitle: "A few examples of the work we’ve completed for homeowners and businesses.",
    // Replace these with real photos later (local /public images or hosted URLs)
   items: [
  {
    title: "Patio Awning Addition",
    tag: "Addition",
    description: "Added this patio awning to provide shade and outdoor comfort.",
    images: [
    "/projects/awning-add-on-after-1.jpg",
    "/projects/awning-add-on-after-2.jpg",
    "/projects/awning-add-on-after-3.jpg",
    "/projects/awning-add-on-before.jpg",
  ],
    beforeIndex: 3,
  },
  {
  title: "Screened-in Porch Build",
  tag: "Outdoor",
  description:
    "Added a screened-in porch and a wheelchair ramp to improve accessibility and outdoor living space.",
  images: [
    "/projects/porch-build-after-1.jpg",
    "/projects/porch-build-after-2.jpg",
     "/projects/porch-build-after-3.jpg",
    "/projects/porch-build-before-1.jpg",
    "/projects/porch-build-before-2.jpg",
  ],
  beforeIndex: 3,
},
{
  title: "Deck Build",
  tag: "Outdoor",
  description:
    "Finished deck build showcasing clean lines, solid construction, and a functional outdoor space.",
  images: [
    "/projects/deck-build-after-1.jpg",
    "/projects/deck-build-after-2.jpg",
  ],
},
{
  title: "Whole Home Remodel",
  tag: "Remodel",
  description:
    "Full home renovation showcasing multiple transformations completed throughout the property.",
  images: [
    "/projects/whole-home-remodel-1.jpg",
    "/projects/whole-home-remodel-2.jpg",
    "/projects/whole-home-remodel-3.jpg",
  ],
},
{
  title: "Bathroom Remodel",
  tag: "Remodel",
  description:
    "Updated this bathroom with modern fixtures, tile work, and a fresh design.",
  images: [
    "/projects/bathroom-remodel-1.jpg",
    "/projects/bathroom-remodel-2.jpg",
    "/projects/bathroom-remodel-3.jpg",
  ],
},
{
  title: "Flooring Replacement",
  tag: "Remodel",
  description:
    "Replaced old flooring with new interlocking laminate flooring to enhance the home's aesthetic and durability.",
  images: [
    "/projects/floor-remodel-1.png",
    "/projects/floor-remodel-2.png",
    "/projects/floor-remodel-3.png",
    "/projects/floor-remodel-4.png",
    "/projects/floor-remodel-5.png",
  ],
},

]
  },
  why: {
    title: "Why choose Nextgin",
    items: [
      { title: "Straight answers", desc: "Clear communication, realistic timelines, no surprises." },
      { title: "Quality workmanship", desc: "We treat every job like it’s our own property." },
      { title: "Safety and cleanliness", desc: "Respectful job sites, safe practices, and clean finishes." },
      { title: "Local and dependable", desc: "Proudly serving our community across Western Kentucky." },
    ],
  },
  contact: {
    title: "Request a Quote",
    subtitle: "Tell us about your project and we’ll reach out with next steps.",
    // Add real contact info later
    phone: "(270) 350-3901",
    email: "nxtginconstruction@gmail.com",
  },
} as const;


