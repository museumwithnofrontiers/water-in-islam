import { exhibitionConfig } from '@museumwnf/viewer-layout/dxa'

// The whole declaration of this website: a DXA exhibition, whose pages,
// shell, menu, sponsor strip and legacy redirects are the family's
// (`exhibitionConfig`, @museumwnf/viewer-layout/dxa). What is this
// exhibition's own is below.

// The source-database chip's colour, per project: one of
// @museumwnf/viewer-layout's `mwnf-chip--<name>` classes for every project id
// the package's `manifest.projects` carries.
// A record with no project at all is an Explore record, whose chip the
// family draws itself.
export const projectColors = {
  '61c122ac-ea86-5462-8bab-6b86138c49b2': 'mwnf-chip--ISLandEPM', // Discover Islamic Art
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4': 'mwnf-chip--ISLandEPM', // Explore Islamic Art Collections
  '0f031e22-6dc6-5ce6-b94b-9bb88345140c': 'mwnf-chip--AWE', // Sharing History
  'ad963031-4a8c-5d06-b797-b7cfc772e3c0': 'mwnf-chip--DGA', // Discover Glass Art
  'a0817323-79ca-53fc-95ac-9f65ee2fcbac': 'mwnf-chip--Galleries', // MWNF Galleries
  '21cccf03-49f5-55d3-96f5-eddeee7a989d': 'mwnf-chip--EXH', // Water in Islam (this exhibition's own project)
  '09bed55d-efe6-50e0-8c24-1647bc9822eb': 'mwnf-chip--EXH', // The Table Is Set (legacy's EXTHE, which shared the exhibition family)
}

// The projects whose item sheets still carry legacy's Explore-partner notice.
export const noticeProjects = [
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4', // Explore Islamic Art Collections
]

export default exhibitionConfig({
  // The dataset package this website renders. Must match the alias in
  // vite.config.js and the dependency in package.json.
  datasetPackage: '@museumwnf/water-in-islam-data',

  // The name for a package that predates `manifest.site`.
  siteName: 'Water in Islam',

  // The address this build is deployed at, base path included, read by the
  // source credit: the GitHub Pages address, the same repository segment
  // vite.config.js's `base` puts in the build's base path, so the two change
  // together, and with the domain.
  origin: 'https://museumwithnofrontiers.github.io/water-in-islam',

  projectColors,
  noticeProjects,

  // The credits page's body.
  creditsBody: 'waterInIslam.credits.body',
})
