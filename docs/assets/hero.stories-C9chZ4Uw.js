import{r as u,j as e}from"./index-Dx8mPDEb.js";import{g as S,C as H,a as n}from"./stories-CynN5EB6.js";const I=r=>u.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...r},u.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})),B="/simple-react-components/assets/react-yYm7vUTp.png",T=({title:r,description:x,primaryLink:o=void 0,primaryLinkLabel:f="Get started",primaryLinkIcon:i=void 0,secondaryLink:t=void 0,secondaryLinkLabel:j="Learn more",image:l=void 0})=>{var c,a,d,m,h,p,y,g;const s=S(),L=s?(c=s==null?void 0:s.Hero)==null?void 0:c.container:"hero-container",_=s?(a=s==null?void 0:s.Hero)==null?void 0:a.left:"hero-container__left",N=s?(d=s==null?void 0:s.Hero)==null?void 0:d.right:"hero-container__right",w=s?(m=s==null?void 0:s.Hero)==null?void 0:m.title:"hero-container__title",v=s?(h=s==null?void 0:s.Hero)==null?void 0:h.description:"hero-container__description",k=s?(p=s==null?void 0:s.Hero)==null?void 0:p.primaryLink:"hero-container__primary-link",R=s?(y=s==null?void 0:s.Hero)==null?void 0:y.primaryIcon:"hero-container__primary-icon",b=s?(g=s==null?void 0:s.Hero)==null?void 0:g.secondaryLink:"hero-container__secondary-link";return e.jsxs("section",{className:L,children:[e.jsxs("div",{className:_,children:[e.jsx("h1",{className:w,children:r}),e.jsx("p",{className:v,children:x}),o&&e.jsxs("a",{href:o,className:k,children:[f,i&&e.jsx("span",{className:R,children:i})]}),t&&e.jsx("a",{href:t,className:b,children:j})]}),l&&e.jsx("div",{className:N,children:e.jsx("img",{src:l,style:{width:"100%"},alt:"hero image"})})]})},A=()=>e.jsxs("main",{style:{marginBottom:"2rem"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("h1",{children:"Hero"}),e.jsx("span",{className:"current-mapping",children:H})]}),e.jsx(T,{title:"The only React library you'll ever need",description:"Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently.",primaryLink:"#",primaryLinkLabel:"Get started",primaryLinkIcon:e.jsx(I,{}),secondaryLink:"#",secondaryLinkLabel:"Learn more",image:B}),e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Props"}),e.jsxs("ul",{className:"props-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"title"}),": string"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"description"}),": string"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"primaryLink?"}),": string (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"primaryLinkLabel?"}),": string (defaults to: 'Get Started')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"primaryLinkIcon?"}),": React.ReactNode (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"secondaryLink?"}),": string (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"secondaryLinkLabel?"}),": string (defaults to: 'Learn more')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"image?"}),": string | undefined (defaults to: undefined)"]})]}),e.jsx("h2",{children:"Code for the example above"}),e.jsx("div",{children:e.jsx(n,{style:{marginTop:"-.25rem"},code:`<Hero
  title="The only React library you'll ever need"
  description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
  primaryLink="#"
  primaryLinkLabel="Get started"
  primaryLinkIcon={<ArrowRightIcon />}
  secondaryLink="#"
  secondaryLinkLabel="Learn more"
  image={ReactLogo}
/>`})}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("i",{children:"Note: the button icon should be an SVG, but the image not. For example:"}),e.jsx(n,{style:{marginTop:"-.25rem"},showCopyButton:!1,code:`import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import ReactLogo from '@/assets/images/react.png'
`}),e.jsx("i",{children:"Note: If you choose the 'vanilla' variant mapping, the hero will be rendered with the following class names (so you can style it accordingly):"}),e.jsx(n,{style:{marginTop:"-.25rem"},showCopyButton:!1,code:`<section class="hero-container">
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
      <svg>...</svg>
    </a>
    <a href="..." class="hero-container__secondary-link">
      Learn more
    </a>
  </div>
  <div class="hero-container__right">
    <img alt="hero" src="...">
  </div>
</section>`})]})]})]});A.storyName="Hero";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as HeroStory};
