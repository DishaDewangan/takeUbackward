import React from"react";
import Tooltip from"@mui/material/Tooltip";
import{styled}from"@mui/material/styles";

const CustomTooltip=styled(Tooltip)(({theme})=>({
  backgroundColor:"#000",
  borderRadius:"5px",
  color:"#fff",
  fontSize:"14px",
  fontFamily:["Castoro","cursive"],
  fontWeight:400,
  padding:"10px",
  "& .MuiTooltip-arrow":{
    color:"#000",
    fontSize:9,
  },
}));

export const InfoToolTip=({text,component})=>{
  return(
    <CustomTooltip title={text} placement={"top"} arrow>
      {component}
    </CustomTooltip>
  );
};
