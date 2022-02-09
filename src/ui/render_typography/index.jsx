import React, { useState } from "react";
import { Container, Typography } from "..";
import s from "./styles.module.scss";

export const RenderTypography = ({ content }) => {
  const [readmore, setReadmore] = useState(false);

  if (readmore) {
    return (
      <>
        {content.map((paragraph, index) => {
          return (
            <Typography small customclass={s.text} key={index}>
              {paragraph}
            </Typography>
          );
        })}
        <button className={s.btn} onClick={() => setReadmore(false)}>
          ... Read less
        </button>
      </>
    );
  }

  return (
    <>
      <Typography small customclass={s.text}>
        {content[0]}
      </Typography>
      {content.length > 1 && (
        <button className={s.btn} onClick={() => setReadmore(true)}>
          Read more ...
        </button>
      )}
    </>
  );
};
