const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const anchors = document.querySelectorAll('a')
anchors[0].textContent = "Services"
anchors[1].textContent = "Product"
anchors[2].textContent = "Vision"
anchors[3].textContent = "Features"
anchors[4].textContent = "About"
anchors[5].textContent = "Contact"
anchors.forEach(item => {
  item.classList.toggle('italic')
})

const image = document.querySelector('#logo-img')
image.setAttribute('src', "http://localhost:9000/img/logo.png")

const ctaTitle = document.querySelector('.cta-text h1')
ctaTitle.textContent = "DOM Is Awesome"
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = "Get Started"

const imageTwo = document.querySelector('#cta-img')
imageTwo.setAttribute('src', "http://localhost:9000/img/cta.png")

const contentTitle = document.querySelector('.text-content h4')
contentTitle.textContent = "Features"
const contentText = document.querySelector('.text-content p')
contentText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImage = document.querySelector('#middle-img')
midImage.setAttribute('src', 'http://localhost:9000/img/accent.png')

const bottomTitle = document.querySelectorAll('.bottom-content .text-content h4')
const bottomText = document.querySelectorAll('.bottom-content .text-content p')
bottomTitle[0].textContent = "Services"
bottomTitle[1].textContent = "Product"
bottomTitle[2].textContent = "Vision"
bottomText[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomText[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"
bottomText[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

document.querySelector('.contact h4').textContent = "Contact"
const address = document.querySelectorAll('.contact p') 
address[0].textContent = "123 Way 456 Street Somewhere, USA"
address[1].textContent = "1 (888) 888-8888"
address[2].textContent = "sales@greatidea.io"

document.querySelector('footer a').classList.toggle('bold')
document.querySelector('footer a').textContent = "Copyright Great Idea! 2021"
console.log('project wired!')
