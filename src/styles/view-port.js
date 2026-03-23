export const setCustomViewport=()=>{const e=window.matchMedia("(min-width: 1051px)"),t=window.matchMedia("(max-width: 1050px)"),o=document.querySelector("body"),n=document.getElementById("container"),i=document.getElementById("container-main"),r=document.querySelectorAll("header")[1];if(!n||!i||!o)return;const s=(e,t)=>{e&&Object.assign(e.style,t)};if(e.matches){const e=window.innerWidth/1920;s(o,{overflow:"hidden auto"}),s(r,{opacity:"0"}),s(n,{transform:`scale(${e})`,transformOrigin:"top left",width:"1920px",position:"fixed",top:"0",padding:"29px 0 30px 0",zIndex:"100",backgroundColor:"#080c26e6",display:"block",borderBottom:"1px solid #556E944D"}),s(i,{transform:`scale(${e})`,transformOrigin:"top left",width:"1920px",overflowX:"visible",height:"0"})}else if(t.matches){const e=window.innerWidth/360;s(o,{overflow:""}),s(r,{opacity:"0"}),s(n,{transform:`scale(${e})`,transformOrigin:"top left",width:"360px",position:"fixed",top:"0",padding:"24px 0 24px 0",zIndex:"100",backgroundColor:"#080c26e6",display:"block",borderBottom:"1px solid #556E944D"}),s(i,{transform:`scale(${e})`,transformOrigin:"top left",width:"360px",overflowX:"hidden",height:""})}else s(o,{overflow:""}),s(r,{opacity:"0"}),s(n,{transform:"",transformOrigin:"",width:"",position:"",top:"",padding:"",zIndex:"100",backgroundColor:"",borderBottom:""}),s(i,{transform:"",transformOrigin:"",width:"",overflowX:"hidden",height:""})};

export const resetCustomViewport = () => {
  const body = document.querySelector("body");
  const container = document.getElementById("container");
  const containerMain = document.getElementById("container-main");
  const header = document.querySelectorAll("header")[1];

//   if (!containerMain || !body) return;

  const resetStyles = (el) => {
    if (!el) return;
    el.removeAttribute("style"); // cleanest reset
  };

  // Remove all inline styles
  resetStyles(body);
  resetStyles(container);
  resetStyles(containerMain);
  resetStyles(header);
};


let resizeHandler = null;

export const setResponsiveRootFontSize = () => {
  resizeHandler = () => {
    const vw = window.innerWidth;

    let fontSize;

    if (vw >= 1051) {
      fontSize = vw * (16 / 1920);
    } else {
      fontSize = vw * (16 / 360);
    }

    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  // Run once
  resizeHandler();

  // Attach listener
  window.addEventListener("resize", resizeHandler);
};

export const removeResponsiveRootFontSize = () => {
  // Remove listener
  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
    resizeHandler = null;
  }

  // Reset root font size
  document.documentElement.style.fontSize = "";
};