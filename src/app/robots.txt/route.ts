export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://calc.friz.dev/sitemap.xml
`
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
