import{j as e}from"./index-C9AM2mNa.js";import{g as f,C as j,c as C,a as l}from"./styles-Bp_QRPI0.js";/* empty css                */const s=({id:o="checkDefault",label:h=null,className:p="",value:i="",onChange:t,...m})=>{var d,a,r;const c=f(),n=c?(d=c==null?void 0:c.Checkbox)==null?void 0:d.container:"form-check",b=c?(a=c==null?void 0:c.Checkbox)==null?void 0:a.input:"form-check-input",k=c?(r=c==null?void 0:c.Checkbox)==null?void 0:r.label:"form-check-label",x=u=>{t&&t(u)};return e.jsxs("div",{className:n,children:[e.jsx("input",{className:b,type:"checkbox",value:i,id:o,...m,onChange:x}),e.jsx("label",{className:k,htmlFor:o,children:h})]})},y=()=>e.jsxs("main",{className:"container",children:[e.jsx("h1",{children:"Checkbox"}),e.jsx("span",{style:C,children:j}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(s,{id:"check-default",label:"Default checkbox",value:"remember-me",onChange:()=>{alert("Checkbox clicked")}}),e.jsx(l,{code:`<Checkbox
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
/>`})]})]});y.storyName="Checkbox";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as CheckboxStory};
