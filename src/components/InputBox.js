import React from 'react'

function InputBoxAccount(props) {
  /*
  <InputBoxAccount> has the following attributes:
  width (Required) - The width of the whole component
  marginBottom (Required) - bottom margin of the component
  className (Optional) - add classnames

  This component also handles the following <input> attribute:
  type, placeholder, autocomplete, value, onChange, required

  This takes a children component where it can be an icon (Optional) at the start of the inputbox.
  */
  return (
    <div className={'flex justify-center '+props.className}>
        <div className={"relative " + (props.width!==undefined?props.width:"w-3/5 ") + (props.marginBottom!==undefined?props.marginBottom:"mb-6")}>
            {/*The children here is the icon used for the input box if needed.*/}
            {
            props.children!==undefined ?
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    {props.children}
                </div>
            :
            undefined
            }
            {/*This is the input box where each attribute is passed onto the actual <input> tag*/}
            <input
                type={props.type!==undefined?props.type:"text"}
                className={"bg-white border border-white text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " + (props.children!==undefined?"pl-10":"")}
                placeholder={props.placeholder!==undefined?props.placeholder:""}
                autocomplete={props.autocomplete!==undefined?'email':null}
                value={props.value!==undefined?props.value:""}
                onChange={props.onChange!==undefined?props.onChange:null}
                required={props.required!==undefined?props.required:false}/>
        </div>
    </div>
  )
}

export { InputBoxAccount };