import{j as e}from"./index-BoPREZ84.js";import{g as p,C as j,a as l}from"./stories-DJ4KesCl.js";const c=({id:a="checkDefault",label:i=null,value:o="",className:f="",onChange:t,...h})=>{var d,n,r;const s=p(),m=(d=s==null?void 0:s.Checkbox)==null?void 0:d.container,b=(n=s==null?void 0:s.Checkbox)==null?void 0:n.input,x=(r=s==null?void 0:s.Checkbox)==null?void 0:r.label,u=k=>{t&&t(k)};return e.jsxs("div",{className:m,children:[e.jsx("input",{className:b,type:"checkbox",value:o,id:a,...h,onChange:u}),e.jsx("label",{className:x,htmlFor:a,children:i})]})},C=()=>e.jsxs("main",{className:"container",children:[e.jsx("h1",{children:"Checkbox"}),e.jsx("span",{className:"current-mapping",children:j}),e.jsx("h2",{children:"Props"}),e.jsxs("ul",{className:"props-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"id"}),": string (defaults to: 'checkDefault')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"label?"}),": string | null (defaults to: null)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"value?"}),": string (defaults to: '')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"className?"}),": string (defaults to: '')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"onChange?"}),": (event: React.ChangeEventHandler","<HTMLInputElement>",") =",">"," void"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"..props"}),":"," ","React.InputHTMLAttributes<HTMLInputElement>"," (any standard attribute for an input element, like checked, disabled, etc.)"]})]}),e.jsx("h2",{children:"Examples"}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(c,{id:"check-default",label:"Default checkbox",value:"remember-me",onChange:()=>{alert("Checkbox clicked")}}),e.jsx(l,{code:`<Checkbox
  id="check-default"
  label="Default checkbox"
  value="remember-me"
  onChange={() => { alert('Checkbox clicked') }}
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(c,{id:"check-checked",label:"Checked state",value:"remember-me",checked:!0}),e.jsx(l,{code:`<Checkbox
  id="check-checked"
  label="Checked state"
  value="remember-me"
  checked
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(c,{id:"check-disabled",label:"Disabled checkbox",value:"remember-me",disabled:!0}),e.jsx(l,{code:`<Checkbox
  id="check-disabled"
  label="Disabled checkbox"
  value="remember-me"
  disabled
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(c,{id:"disabled-checked",label:"Disabled checked",value:"remember-me",checked:!0,disabled:!0}),e.jsx(l,{code:`<Checkbox
  id="disabled-checked"
  label="Disabled checked"
  value="remember-me"
  disabled
  checked
/>`})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Note"}),e.jsx("p",{children:"If you choose the 'vanilla' variant mapping, the checkboxes will be rendered using the Bootstrap class names (so you can style it accordingly). For example:"}),e.jsx(l,{showCopyButton:!1,code:`<div class="form-check">
  <input type="checkbox" class="form-check-input" value="yes" id="remember-me">
  <label class="form-check-label" for="remember-me">
    Remember me
  </label>
</div>
`})]})]});C.storyName="Checkbox";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{C as CheckboxStory};
