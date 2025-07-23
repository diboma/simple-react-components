import{j as e}from"./index-Z76WxOZn.js";import{g as f,C as j,a as l}from"./CodeBlock-CksQrTag.js";/* empty css                */const o=({id:s="checkDefault",label:h=null,className:y="",value:i="",onChange:a,...m})=>{var d,t,r;const c=f(),n=c?(d=c==null?void 0:c.Checkbox)==null?void 0:d.container:"form-check",b=c?(t=c==null?void 0:c.Checkbox)==null?void 0:t.input:"form-check-input",k=c?(r=c==null?void 0:c.Checkbox)==null?void 0:r.label:"form-check-label",x=u=>{a&&a(u)};return e.jsxs("div",{className:n,children:[e.jsx("input",{className:b,type:"checkbox",value:i,id:s,...m,onChange:x}),e.jsx("label",{className:k,htmlFor:s,children:h})]})},C=()=>e.jsxs("main",{className:"container",children:[e.jsx("h1",{children:"Checkbox"}),e.jsx("span",{className:"current-mapping",children:j}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(o,{id:"check-default",label:"Default checkbox",value:"remember-me",onChange:()=>{alert("Checkbox clicked")}}),e.jsx(l,{code:`<Checkbox
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
`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(o,{id:"check-checked",label:"Checked state",value:"remember-me",checked:!0}),e.jsx(l,{code:`<Checkbox
  id="check-checked"
  label="Checked state"
  value="remember-me"
  checked
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(o,{id:"check-disabled",label:"Disabled checkbox",value:"remember-me",disabled:!0}),e.jsx(l,{code:`<Checkbox
  id="check-disabled"
  label="Disabled checkbox"
  value="remember-me"
  disabled
/>`})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(o,{id:"disabled-checked",label:"Disabled checked",value:"remember-me",checked:!0,disabled:!0}),e.jsx(l,{code:`<Checkbox
  id="disabled-checked"
  label="Disabled checked"
  value="remember-me"
  disabled
  checked
/>`})]})]});C.storyName="Checkbox";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{C as CheckboxStory};
