


const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"              // NOTE  CTA IMAGE      CTA IMAGE
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
// -------------------------
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg", // NOTE    LONG IMG    LONG IMG
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// let  longImg= document.getElementById("mid-page-accent.jpg");
// longImg.setAttribute('src', siteContent ["main-content"]["middle-img-src"])


// const middleImg = document.querySelector('.mid-page-accent.jpg');
// middleImg.src = siteContent["main-content"]["middle-img-src"];  
// ==================================================================================
// ==================================================================================


// NOTE   When inserting images you can use 1 of 2 methods:
//       catImg.src = "url"
//               or
//       catImg.setAttribute= ("src", "url")

// ==================================================



// ==========================================================================
              // NOTE        TOP HEADING         TOP HEADING       TOP HEADING
const features =document.querySelectorAll(".main-content .top-content .text-content h4")
// features.textContent= "Features";
console.log(features)
// console.log(features[0])
const features1= features[0]
features1.textContent= "Features";
const features2= features[1]
features2.textContent= "About";

// ------------------------------------------------------------------------------------------

              // NOTE        BOTTOM HEADING         BOTTOM HEADING       BOTTOM HEADING
const about =document.querySelectorAll(".main-content .bottom-content .text-content h4")

const about1= about[0]
about1.textContent= "Services";
const about2= about[1]
about2.textContent= "Product";
const about3= about[2]
about3.textContent= "Vision";


              // NOTE        TOP CONTENT         TOP CONTENT       TOP CONTENT
const topText =document.querySelectorAll(".main-content .top-content .text-content p ")

const text1= topText[0]
// console.log(text1)
text1.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const text2= topText[1]
// console.log(text2)
text2.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


              // NOTE        BOTTOM CONTENT         BOTTOM CONTENT       BOTTOM CONTENT


              const bottomText =document.querySelectorAll(".main-content .bottom-content .text-content p")


              const bottomText1= bottomText[0]
              // console.log(bottomText1)
              bottomText1.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
              
              const bottomText2= bottomText[1]
              // console.log()
              bottomText2.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
              
              const bottomText3= bottomText[2]
              // console.log()
              bottomText3.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



// ################   temporarily deleted// ################   temporarily deleted

// const content1 =document.querySelector(".main-content .top-content .text-content p")
// content1.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// const content2 =document.querySelector(".main-content .bottom-content .text-content h4")
// content2.textContent= "Services";

// const content3 =document.querySelector(".main-content .bottom-content .text-content p")
// content3.textContent= "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// // ################   temporarily deleted// ################   temporarily deleted




// const features= document.querySelector(".main-content .top-content .text-content h4")
// console.log(siteContent["main-content"]["features-h4"]);

// const features2=(siteContent["main-content"]["features-h4"]);
// console.log(features2)




// ------------ WORKS     WORKS     WORKS ------------------

const a1 = document.querySelector('.container header nav a:nth-child(1)');  //    NOTE  1ST A TAG
a1.textContent= "Services"
const a2 = document.querySelector('.container header nav a:nth-child(2)');  //    NOTE  2ND A TAG
a2.textContent= "Product"
const a3 = document.querySelector('.container header nav a:nth-child(3)');  //    NOTE  3RD A TAG
a3.textContent= "Features"
const a4 = document.querySelector('.container header nav a:nth-child(4)');  //    NOTE  4TH A TAG
a4.textContent= "Vision"
const a5 = document.querySelector('.container header nav a:nth-child(5)');  //    NOTE  5TH A TAG
a5.textContent= "About"                                                                                                                                                                                                          
const a6 = document.querySelector('.container header nav a:nth-child(6)');  //    NOTE  6TH A TAG
a6.textContent= "Contact"

// ------------ WORKS     WORKS     WORKS ------------------
const contactP3 =document.querySelector(".contact p:nth-child(4)")
contactP3.textContent= "1 (888) 888-8888";
// ------------ WORKS     WORKS     WORKS ------------------
const contactP2 =document.querySelector(".contact p:nth-child(3)")
contactP2.textContent= "Somewhere, USA"

// ------------ WORKS     WORKS     WORKS ------------------
const contactP1 =document.querySelector(".contact p:nth-child(2)")
contactP1.textContent= "123 Way 456 Street ";

// ------------ WORKS     WORKS     WORKS ------------------
const contactH4 =document.querySelector(".contact h4")
contactH4.textContent=  " Contact ";

// ------------ WORKS     WORKS     WORKS ------------------
const ctaButton= document.querySelector(".cta button")
ctaButton.textContent=  "Get Started"
ctaButton.style.borderRadius= "9px"
ctaButton.style.backgroundColor= "cyan"




// ------------ WORKS     WORKS     WORKS ------------------
const cta= document.querySelector(".cta h1")
cta.textContent=     "DOM Is Awesome"

// ------------ WORKS     WORKS     WORKS ------------------
const footer = document.querySelector('footer')
footer.textContent=  "Copyright Great Idea! 2018"

// ------------ WORKS     WORKS     WORKS ------------------
const email =document.querySelector("site-content p:nth-child(8)")
contactP3.textContent= "sales@gmail";

// // ------------ WORKS     WORKS     WORKS ------------------
const ctaImg= document.querySelector("#cta-img")                      //  NOTE ROUND IMAGE
ctaImg.src = 'img/header-img.png';

// ------------ WORKS     WORKS     WORKS ------------------
const headerH1= document.querySelector('h1')
headerH1.style.color= "red";

// ------------ WORKS     WORKS     WORKS ------------------
// const middleImg = document.querySelector('#middle-img');
// middleImg.src = "img/mid-page-accent.jpg"     //  NOTE MIDDLE IMAGE
      //    OR      OR      OR      OR       OR   //
const middleImg = document.querySelector('.middle-img');      //  NOTE    MIDDLE IMAGE
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]); 


// ------------ WORKS     WORKS     WORKS ------------------  
const prependedItem= document.querySelector('nav')                        //  NOTE      PREPENDED   
// prependedItem.textContent="Sales"
prependedItem.style.color="blue"
prependedItem.prepend("Prepended!")


// ------------ WORKS     WORKS     WORKS ------------------

const appendedItem= document.querySelector('nav')                         //  NOTE      APPENDED   
appendedItem.append("Appended!")

 
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================


//             NOTE  NOT WORKING        NOT WORKING       NOT WORKING       NOTWORKING
// let ctaImg = document.querySelector("#cta-img");
// ctaImg.setAttribute=  "img/header-img.png"
// -------------------------------------------------------------
// const midImg= document.querySelector("middle-img")
// midImg.setAttribute= ("src", "img/mid-page-accent.jpg");
// console.log(midImg)
// img/mid-page-accent.jpg
// -------------------------------------------------------------
// const contactP2 =document.querySelector("p")
// contactP2.textContent= "1 (888) 888-8888";

// -------------------------------------------------------------
// const textContent1= document.querySelectorAll(".top-content ")
// console.log(textContent1)

// -------------------------------------------------------------
// const midImg = document.getElementById("middle-img");
// console.log(midImg)
// midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================




// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// let navMenu= document.querySelectorAll(".container header nav")
// navMenu.textContent(siteContent["nav"]["a"])



// const navMenu = document.querySelectorAll('a');
// console.log(navMenu);




// const cta= document.querySelector(".cta h1")
// cta.textContent=     "DOM Is Awesome"




// const featuresText= document.querySelector(".main-content .features-content")
// featuresText.TextContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

