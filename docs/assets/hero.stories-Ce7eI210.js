import{r as u,j as o}from"./index-AlcJbVyK.js";import{g as H,C as N,a as t}from"./variantSelector-FmF7yFBC.js";import{a as I}from"./styles-rEys3Swb.js";const A=r=>u.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...r},u.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})),T=({title:r,description:f,primaryLink:n=void 0,primaryLinkLabel:x="Get started",primaryLinkIcon:s=void 0,secondaryLink:i=void 0,secondaryLinkLabel:_="Learn more",image:c=void 0})=>{var l,a,h,d,m,y,p,g;const e=H(),w=e?(l=e==null?void 0:e.Hero)==null?void 0:l.container:"hero-container",j=e?(a=e==null?void 0:e.Hero)==null?void 0:a.left:"hero-container__left",L=e?(h=e==null?void 0:e.Hero)==null?void 0:h.right:"hero-container__right",v=e?(d=e==null?void 0:e.Hero)==null?void 0:d.title:"hero-container__title",R=e?(m=e==null?void 0:e.Hero)==null?void 0:m.description:"hero-container__description",b=e?(y=e==null?void 0:e.Hero)==null?void 0:y.primaryLink:"hero-container__primary-link",k=e?(p=e==null?void 0:e.Hero)==null?void 0:p.primaryIcon:"hero-container__primary-icon",S=e?(g=e==null?void 0:e.Hero)==null?void 0:g.secondaryLink:"hero-container__secondary-link";return o.jsxs("section",{className:w,children:[o.jsxs("div",{className:j,children:[o.jsx("h1",{className:v,children:r}),o.jsx("p",{className:R,children:f}),n&&o.jsxs("a",{href:n,className:b,children:[x,s&&o.jsx("span",{className:k,children:s})]}),i&&o.jsx("a",{href:i,className:S,children:_})]}),c&&o.jsx("div",{className:L,children:o.jsx("img",{src:c,style:{width:"100%"},alt:"hero image"})})]})},B="/simple-react-components/assets/react-yYm7vUTp.png",E=()=>o.jsxs("main",{children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsx("h1",{children:"Hero"}),o.jsx("span",{style:I,children:N})]}),o.jsx(T,{title:"The only React library you'll ever need",description:"Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently.",primaryLink:"/?story=hero--hero",primaryLinkLabel:"Get started",primaryLinkIcon:o.jsx(A,{}),secondaryLink:"/?story=hero--hero",secondaryLinkLabel:"Learn more",image:B}),o.jsx(t,{code:`<Hero
  title="The only React library you'll ever need"
  description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
  primaryLink="/?story=hero--hero"
  primaryLinkLabel="Get started"
  primaryLinkIcon={<ArrowRightIcon />}
  secondaryLink="/?story=hero--hero"
  secondaryLinkLabel="Learn more"
  image={reactIcon}
/>`}),o.jsx("br",{}),o.jsx("i",{children:"Note: the button icon should be an SVG, but the image not. For example:"}),o.jsx(t,{style:{marginTop:"-.25rem"},showCopyButton:!1,code:`import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import ReactLogo from '@/assets/images/react.png'`}),o.jsx("i",{children:"Note: If you choose the 'vanilla' variant mapping, the hero will be rendered with the following class names (so you can style it accordingly):"}),o.jsx(t,{style:{marginTop:"-.25rem"},showCopyButton:!1,code:`<section class="hero-container">
  <div class="hero-container__left">
    <h1 class="hero-container__title">
      The only React library you'll ever need
    </h1>
    <p class="hero-container__description">
      Simplify your development with our comprehensive, easy-to-use, and highly customizable React components.
      Build stunning UIs faster and more efficiently.
    </p>
    <a href="/?story=hero--hero" class="hero-container__primary-link">
      Get started
      <svg>...</svg>
    </a>
    <a href="/?story=hero--hero" class="hero-container__secondary-link">
      Learn more
    </a>
  </div>
  <div class="hero-container__right">
    <img alt="hero" src="...">
  </div>
</section>`})]});E.storyName="Hero";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as HeroStory};
