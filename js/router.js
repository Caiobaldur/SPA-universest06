

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }
  
route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  this.handle()
}

handle() {
  const { pathname } = window.location;
  const route = this.routes[pathname] || this.routes[404]
  console.log(pathname)

  switch (pathname) {
    case '/universe':
      document.querySelector('body').classList.remove('background1')
      document.querySelector('body').classList.remove('background3')

      document.querySelector('body').classList.add('background2')
      break

    case '/exploration':
      document.querySelector('body').classList.remove('background1')
      document.querySelector('body').classList.remove('background2')

      document.querySelector('body').classList.add('background3')
      break

    default:
      document.querySelector('body').classList.remove('background2')
      document.querySelector('body').classList.remove('background3')

      document.querySelector('body').classList.add('background1')
      break
  }

  fetch(route)
  .then(data => data.text())
  .then(html =>{
    document.querySelector('#app').innerHTML = html
  })

  }
}


