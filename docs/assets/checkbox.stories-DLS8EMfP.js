import{j as e}from"./index-Dx8mPDEb.js";import{g as p,C as j,a as l}from"./stories-CynN5EB6.js";const s=({id:a="checkDefault",label:i=null,value:o="",className:C="",onChange:t,...h})=>{var d,n,r;const c=p(),m=c?(d=c==null?void 0:c.Checkbox)==null?void 0:d.container:"form-check",b=c?(n=c==null?void 0:c.Checkbox)==null?void 0:n.input:"form-check-input",x=c?(r=c==null?void 0:c.Checkbox)==null?void 0:r.label:"form-check-label",u=k=>{t&&t(k)};return e.jsxs("div",{className:m,children:[e.jsx("input",{className:b,type:"checkbox",value:o,id:a,...h,onChange:u}),e.jsx("label",{className:x,htmlFor:a,children:i})]})},f=()=>e.jsxs("main",{className:"container",children:[e.jsx("h1",{children:"Checkbox"}),e.jsx("span",{className:"current-mapping",children:j}),e.jsx("h2",{children:"Props"}),e.jsxs("ul",{className:"props-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"id"}),": string (defaults to: 'checkDefault')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"label?"}),": string | null (defaults to: null)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"value?"}),": string (defaults to: '')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"className?"}),": string (defaults to: '')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"onChange?"}),": (event: React.ChangeEventHandler","<HTMLInputElement>",") =",">"," void"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"..props"}),":"," ","React.InputHTMLAttributes<HTMLInputElement>"," (any standard attribute for an input element, like checked, disabled, etc.)"]})]}),e.jsx("h2",{children:"Examples"}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(s,{id:"check-default",label:"Default checkbox",value:"remember-me",onChange:()=>{alert("Checkbox clicked")}}),e.jsx(l,{code:`<Checkbox
  id="check-default"
  label="Default checkbox"
  value="remember-me"
  onChange={() => { alert('Checkbox clicked') }}
/>`}),e.jsx("i",{children:"Note: If you choose the 'vanilla' variant mapping, the checkbox will be rendered with the following class names (so you can style it accordingly):"}),e.jsx(l,{showCopyButton:!1,code:`<div class="form-check">
  <input class="form-check-input" type="checkbox" value="remember-me" id="check-default">
  <label class="form-check-label" for="check-default">
    Default checkbox
  </label>
</div>
`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(s,{id:"check-checked",label:"Checked state",value:"remember-me",checked:!0}),e.jsx(l,{code:`<Checkbox
  id="check-checked"
  label="Checked state"
  value="remember-me"
  checked
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(s,{id:"check-disabled",label:"Disabled checkbox",value:"remember-me",disabled:!0}),e.jsx(l,{code:`<Checkbox
  id="check-disabled"
  label="Disabled checkbox"
  value="remember-me"
  disabled
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(s,{id:"disabled-checked",label:"Disabled checked",value:"remember-me",checked:!0,disabled:!0}),e.jsx(l,{code:`<Checkbox
  id="disabled-checked"
  label="Disabled checked"
  value="remember-me"
  disabled
  checked
/>`})]})]});f.storyName="Checkbox";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as CheckboxStory};
