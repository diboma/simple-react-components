import{r as g,j as e}from"./index-BoPREZ84.js";import{g as S,C as H,a as n}from"./stories-DJ4KesCl.js";const I=r=>g.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...r},g.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})),T="/simple-react-components/assets/react-yYm7vUTp.png",A=({title:r,description:x,primaryLink:o=void 0,primaryLinkLabel:j="Get started",primaryLinkIcon:i=void 0,secondaryLink:t=void 0,secondaryLinkLabel:f="Learn more",image:l=void 0})=>{var c,a,d,m,h,p,y,u;const s=S(),L=(c=s==null?void 0:s.Hero)==null?void 0:c.container,N=(a=s==null?void 0:s.Hero)==null?void 0:a.left,w=(d=s==null?void 0:s.Hero)==null?void 0:d.right,v=(m=s==null?void 0:s.Hero)==null?void 0:m.title,R=(h=s==null?void 0:s.Hero)==null?void 0:h.description,k=(p=s==null?void 0:s.Hero)==null?void 0:p.primaryLink,b=(y=s==null?void 0:s.Hero)==null?void 0:y.primaryIcon,_=(u=s==null?void 0:s.Hero)==null?void 0:u.secondaryLink;return e.jsxs("section",{className:L,children:[e.jsxs("div",{className:N,children:[e.jsx("h1",{className:v,children:r}),e.jsx("p",{className:R,children:x}),o&&e.jsxs("a",{href:o,className:k,children:[j,i&&e.jsx("span",{className:b,children:i})]}),t&&e.jsx("a",{href:t,className:_,children:f})]}),l&&e.jsx("div",{className:w,children:e.jsx("img",{src:l,style:{width:"100%"},alt:"hero image"})})]})},B=()=>e.jsxs("main",{style:{marginBottom:"2rem"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("h1",{children:"Hero"}),e.jsx("span",{className:"current-mapping",children:H})]}),e.jsx(A,{title:"The only React library you'll ever need",description:"Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently.",primaryLink:"#",primaryLinkLabel:"Get started",primaryLinkIcon:e.jsx(I,{}),secondaryLink:"#",secondaryLinkLabel:"Learn more",image:T}),e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Props"}),e.jsxs("ul",{className:"props-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"title"}),": string"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"description"}),": string"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"primaryLink?"}),": string (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"primaryLinkLabel?"}),": string (defaults to: 'Get Started')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"primaryLinkIcon?"}),": React.ReactNode (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"secondaryLink?"}),": string (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"secondaryLinkLabel?"}),": string (defaults to: 'Learn more')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"image?"}),": string | undefined (defaults to: undefined)"]})]}),e.jsx("h2",{children:"Code for the example above"}),e.jsx("div",{children:e.jsx(n,{style:{marginTop:"-.25rem"},code:`<Hero
  title="The only React library you'll ever need"
  description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
  primaryLink="#"
  primaryLinkLabel="Get started"
  primaryLinkIcon={<ArrowRightIcon />}
  secondaryLink="#"
  secondaryLinkLabel="Learn more"
  image={ReactLogo}
/>`})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Notes"}),e.jsx("p",{children:"The button icon should be an SVG, but the image not. For example:"}),e.jsx(n,{style:{marginTop:"-0.5rem"},showCopyButton:!1,code:`import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import ReactLogo from '@/assets/images/react.png'
`}),e.jsx("p",{children:"If you choose the 'vanilla' variant mapping, the hero will be rendered using the following class names (so you can style it accordingly). For example:"}),e.jsx(n,{style:{marginTop:"-0.5rem"},showCopyButton:!1,code:`<section class="hero-container">
  <div class="hero-container__left">
    <h1 class="hero-container__title">
      The only React library you'll ever need
    </h1>
    <p class="hero-container__description">
      Simplify your development with our comprehensive, easy-to-use, and highly customizable React components.
      Build stunning UIs faster and more efficiently.
    </p>
    <a href="..." class="hero-container__primary-link">
      Get started
      <svg class="hero-container__primary-icon">...</svg>
    </a>
    <a href="..." class="hero-container__secondary-link">
      Learn more
    </a>
  </div>
  <div class="hero-container__right">
    <img alt="hero" src="...">
  </div>
</section>`})]})]})]});B.storyName="Hero";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as HeroStory};
