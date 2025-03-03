// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Bordful - Open Source Job Board Software'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default function Image() {
  // Redirect to the actual image file in the public directory
  return new Response('', {
    status: 307, // Temporary redirect
    headers: {
      'Location': '/images/bordful-job-board-software.png',
      'Content-Type': 'image/png',
    },
  })
}
