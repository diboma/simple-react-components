import{j as e,r as N}from"./index--3LzUWva.js";import{g as f,C as S,a as m}from"./stories-lCcU3Zw5.js";const C=({name:t,label:n=void 0,helpText:a=void 0,value:p="",options:h=[],onChange:x,...r})=>{var o,c,i,d,u;const l=f(),y=(o=l==null?void 0:l.Select)==null?void 0:o.container,j=(c=l==null?void 0:l.Select)==null?void 0:c.select,g=(i=l==null?void 0:l.Select)==null?void 0:i.label,v=(d=l==null?void 0:l.Select)==null?void 0:d.helpText,b=(u=l==null?void 0:l.Select)==null?void 0:u.asterisk;return e.jsxs("div",{className:y,children:[n&&e.jsxs("label",{htmlFor:"title",className:g,children:[n,r.required&&e.jsx("span",{className:b,children:" *"})]}),a&&e.jsx("p",{className:v,children:a}),e.jsxs("select",{id:t,name:t,value:p,onChange:s=>x(s),className:j,...r,children:[e.jsx("option",{value:"",disabled:r.required}),h.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]})]})},E=()=>{const[t,n]=N.useState("");return e.jsxs("main",{className:"container",children:[e.jsx("h1",{children:"Select"}),e.jsx("span",{className:"current-mapping",children:S}),e.jsx("h2",{children:"Props"}),e.jsxs("ul",{className:"props-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"name"}),": string"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"label?"}),": string | undefined (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"helpText?"}),": string | undefined (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"value?"}),": string | number | readonly string[] | undefined (defaults to: '')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"onChange"}),": ( e:"," ","React.ChangeEvent<HTMLSelectElement>",") =",">"," void"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"options"}),":"," ","{value: string, label: string}[]"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"..props"}),": ","React.InputHTMLAttributes"," ","(any standard attribute for a select element, like required, disabled, readonly, etc.)"]})]}),e.jsx("h2",{children:"Examples"}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(C,{name:"country",label:"Country",helpText:"Please select your country",value:t,onChange:a=>n(a.target.value),options:[{value:"BE",label:"Belgium"},{value:"DE",label:"Germany"},{value:"NL",label:"Netherlands"},{value:"FR",label:"France"}],required:!0}),e.jsx(m,{code:`<Select 
  name="country"
  label="Country"
  helpText="Please select your country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'BE', label: 'Belgium' },
    { value: 'DE', label: 'Germany' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'FR', label: 'France' },
  ]}
  required
/>`})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Note"}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("p",{children:"If you choose the 'vanilla' variant mapping, the select element will be rendered using the following class names (so you can style it accordingly). For example:"}),e.jsx(m,{style:{marginTop:"0.5rem"},showCopyButton:!1,code:`<div class="form-select-container">
  <label for="title" class="form-label">
    Country <span class="text-danger">*</span>
  </label>
  <p class="form-text">Please select your country</p>
  <select id="country" name="country" class="form-select" required="">
    <option value="" disabled=""></option>
    <option value="BE">Belgium</option>
    <option value="DE">Germany</option>
    <option value="NL">Netherlands</option>
    <option value="FR">France</option>
  </select>
</div>`})]})]})]})};E.storyName="Select";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as SelectStory};
