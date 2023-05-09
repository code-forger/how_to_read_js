import React from 'react';

function Content() {
  return (
    <div className="flex-column">
      <p className="margin-auto">
        ✨ Welcome ✨
      </p>
      <br />
      <p>
        Together we are going to read some JavaScript
      </p>
      <br />
      <p>
        But not regular old JavaScript
      </p>
      <br />
      <p>
        <u>Production transpiled JavaScript</u>
      </p>
      <br />
      <p>
        This stuff:
      </p>
      <br />
      <pre className="code clamp-to-view">
        {'(()=>{var nf=Object.create;var Nl=Object.defineProperty;var tf=Object.getOwnPropertyDescriptor;var rf=Object.getOwnPropertyNames,Zi=Object.getOwnPropertySymbols,lf=Object.getP\n'
    + '`+Bl+e}var Wl=!1;function $l(e,n){if(!e||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.definePr\n'
    + '`),o=r.stack.split(`                                                                                                                                                           \n'
    + '`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`                      \n'
    + '`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{Wl=!1,Error.p\n'
    + '`).replace(Ud,"")}function _r(e,n,t){if(n=qu(n),qu(e)!==n&&t)throw Error(h(425))}function Gr(){}var Oo=null,Do=null;function Mo(e,n){return e==="textarea"||e==="noscript"||typ\n'
    + 'Error generating stack: `+o.message+`                                                                                                                                          \n'
    + '`+o.stack}return{value:e,source:n,stack:l,digest:null}}function io(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function Wo(e,n){try{console.e'}
      </pre>
    </div>
  );
}

Content.propTypes = {

};

export default Content;
