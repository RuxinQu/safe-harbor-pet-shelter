import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { FaWeibo } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
export const SocialIcon = () => {
  const [showWechat, setShowWechat] = useState(false);
  return (
    <Box>
      <IconButton
        aria-label="weibo"
        size="large"
        color="error"
        component={"a"}
        target="_blank"
        href="https://weibo.com/n/哈宝的爱之家基地"
      >
        <FaWeibo />
      </IconButton>
      <IconButton
        aria-label="phone"
        size="large"
        color="success"
        onClick={() =>
          showWechat ? setShowWechat(false) : setShowWechat(true)
        }
      >
        <AiFillWechat />
      </IconButton>
      {showWechat && <span>Account Number: 13967353069</span>}
      <IconButton
        size="small"
        color="error"
        component="a"
        target="_blank"
        href="https://www.xiaohongshu.com/user/profile/5c2302d70000000005031f0c"
      >
        <img
          src="https://asset.brandfetch.io/idvL6iJWSM/idR0HyI9DC.png"
          alt="little red book"
          width={31.5}
          height={31.5}
        />
      </IconButton>
    </Box>
  );
};
