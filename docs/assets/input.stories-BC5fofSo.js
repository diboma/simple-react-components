import{j as e}from"./index--3LzUWva.js";import{g as b,C as N,a as l}from"./stories-lCcU3Zw5.js";const j=({type:a,name:s,label:r=void 0,helpText:o=void 0,value:d="",onChange:c,...n})=>{var m,x,h,u;const t=b(),p=(m=t==null?void 0:t.Input)==null?void 0:m.input,y=(x=t==null?void 0:t.Input)==null?void 0:x.label,g=(h=t==null?void 0:t.Input)==null?void 0:h.helpText,f=(u=t==null?void 0:t.Select)==null?void 0:u.asterisk;return e.jsxs("div",{style:{marginBottom:"1rem"},children:[r&&e.jsxs("label",{htmlFor:"title",className:y,children:[r,n.required&&e.jsx("span",{className:f,children:" *"})]}),o&&e.jsx("p",{className:g,children:o}),a==="textarea"?e.jsx("textarea",{id:s,name:s,value:d,onChange:i=>c(i),className:p,...n}):e.jsx("input",{type:a,id:s,name:s,value:d,onChange:i=>c(i),className:p,...n})]})},T=()=>e.jsxs("main",{className:"container",children:[e.jsx("h1",{children:"Input"}),e.jsx("span",{className:"current-mapping",children:N}),e.jsx("h2",{children:"Props"}),e.jsxs("ul",{className:"props-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"type"}),": React.HTMLInputTypeAttribute | 'textarea'"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"name"}),": string"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"label?"}),": string | undefined (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"helpText?"}),": string | undefined (defaults to: undefined)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"value?"}),": string | number | readonly string[] | undefined (defaults to: '')"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"onChange"}),": ( e:"," ","React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",") =",">"," ","void"]}),e.jsxs("li",{children:[e.jsx("span",{className:"prop",children:"..props"}),": ","React.InputHTMLAttributes"," ","(any standard attribute for an input element, like required, disabled, readonly, etc.)"]})]}),e.jsx("h2",{children:"Example: Text input"}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(j,{type:"text",label:"Title",name:"title",value:"",onChange:()=>{},required:!0,helpText:"This is a required field"}),e.jsx(l,{code:`<Input 
  type="text"
  label="Title"
  name="title"
  value=""
  onChange={() => {}}
  required
/>`}),e.jsx("h3",{children:"Note"}),e.jsx("p",{children:"If you choose the 'vanilla' variant mapping, the input will be rendered with the following class names (so you can style it accordingly):"}),e.jsx(l,{style:{marginTop:"0.5rem"},showCopyButton:!1,code:`<div style="margin-bottom: 1rem;">
  <label for="title" class="form-label">
    Title <span class="text-danger">*</span>
  </label>
  <p class="form-text">This is a required field</p>
  <input
    type="text"
    id="title"
    name="title"
    class="form-control"
    value="">
</div>`})]}),e.jsx("h2",{children:"Example: Textarea"}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(j,{type:"textarea",label:"Description",name:"description",value:"",onChange:()=>{}}),e.jsx(l,{code:`<Input 
  type="textarea"
  label="Description"
  name="description"
  value=""
  onChange={() => {}}
/>`}),e.jsx("h3",{children:"Note"}),e.jsx("p",{children:"If you choose the 'vanilla' variant mapping, the textarea will be rendered with the following class names (so you can style it accordingly):"}),e.jsx(l,{style:{marginTop:"0.5rem"},showCopyButton:!1,code:`<div style="margin-bottom: 1rem;">
  <label for="title" class="form-label">
    Description
  </label>
  <textarea
    id="description"
    name="description"
    class="form-control"></textarea>
</div>`})]})]});T.storyName="Input";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as InputStory};
