const BackgroundColor = [
    {label:"White",value:"#ffffff"},
    {label:"Red",value:"#f39f76"},
    {label:"Orange",value:"#f9b77d"},
    {label: "Green",value:"#b0e389"},
    {label: "Yellow",value:"#fff8b8"},
    {label:"Gray",value:"#cecece"},
    {label:"Blue",value:"#b4ddd3"},
    {label:"Purple",value:"#d3bfdb"},
    {label:"Pink",value:"#f6e2dd"},
  ];

  export const getColorValue = (colorName:string)=>{
   return BackgroundColor.find((c) => c.label == colorName)?.value || "#ffffff";
  }

export default BackgroundColor