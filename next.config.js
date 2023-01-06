/** @type {import('next').NextConfig} */

function smartRoute(page) {
  let newPage = ""
  for (let j = 0; j < page.length; j++) {
    newPage += `(${page[j].toLowerCase()}|${page[j].toUpperCase()})`
  }
  return newPage
}

module.exports = {
  output: 'standalone',
  async rewrites() {
    const pages = ["about", "contact", "team", "blogs", "news"];
    let rewrittenRoutes = []
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      const newPage = smartRoute(page)
      const rewrittenRoute = {
        source: `/${newPage}`,
        destination: `/${page}`,
      };
      rewrittenRoutes = [...rewrittenRoutes, rewrittenRoute]
    }

    const dynamicPages = ["blogs", "news"]
    for (let i = 0; i < dynamicPages.length; i++) {
      const page = dynamicPages[i];
      const newPage = smartRoute(page)
      const rewrittenRoute = {
        source: `/${newPage}/:id*`,
        destination: `/${page}/:id*`,
      };
      rewrittenRoutes = [...rewrittenRoutes, rewrittenRoute]
    }
    // const dynamicRoutes = [{
    //   source: `/${smartRoute("blogs")}/:id*`,
    //   destination: '/blogs/:id*',
    // },]
    // rewrittenRoutes = [...rewrittenRoutes, ...dynamicRoutes]
    
    console.log(rewrittenRoutes)
    return rewrittenRoutes
  },
}
