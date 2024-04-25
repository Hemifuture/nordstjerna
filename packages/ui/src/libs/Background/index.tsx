import { createEffect, createSignal, onMount } from "solid-js";
import style from "./style.module.scss";

const Background = () => {
  const [width, setWidth] = createSignal(0);
  let bgRef: HTMLDivElement | undefined;
  let starsRef: HTMLDivElement | undefined;
  let stars2Ref: HTMLDivElement | undefined;
  let stars3Ref: HTMLDivElement | undefined;

  createEffect(() => {
    // console.log("width", width());
    makeStars(width());
  });

  onMount(() => {
    setWidth(window.innerWidth);

    window.onresize = () => {
      if (width() === window.innerWidth) return;

      setWidth(window.innerWidth);
      // makeStars(width());
    };
  });

  const makeStars = (width: number) => {
    const starShadow = (count: number, dark: boolean) => {
      return [...Array(count).keys()]
        .reduce((acc) => {
          return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
            Math.random() * 2000
          )}px ${dark ? "var(--star-color-dark)" : "var(--star-color)"},`;
        }, "")
        .slice(0, -1);
    };

    const range = 2000;

    const spaceSmall = 3;
    const countSmall = Math.floor(range / spaceSmall);

    const spaceMedium = 10;
    const countMedium = Math.floor(range / spaceMedium);

    const spaceBig = 20;
    const countBig = Math.floor(range / spaceBig);
    
    const starsShadowSmall = starShadow(countSmall, false);
    const starsShadowSmallDark = starShadow(countSmall, true);

    const starsShadowMedium = starShadow(countMedium, false);
    const starsShadowMediumDark = starShadow(countMedium, true);

    const starsShadowBig = starShadow(countBig, false);
    const starsShadowBigDark = starShadow(countBig, true);

    // const starsShadowSmall = [...Array(countSmall).keys()]
    //   .reduce((acc) => {
    //     return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
    //       Math.random() * range
    //     )}px var(--star-color),`;
    //   }, "")
    //   .slice(0, -1);

    // const starsShadowSmallDark = [...Array(countSmall).keys()]
    //   .reduce((acc) => {
    //     return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
    //       Math.random() * range
    //     )}px var(--star-color-dark),`;
    //   }, "")
    //   .slice(0, -1);

    // const starsShadowMedium = [...Array(countMedium)]
    //   .reduce((acc) => {
    //     return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
    //       Math.random() * range
    //     )}px var(--star-color),`;
    //   }, "")
    //   .slice(0, -1);

    // const starsShadowMediumDark = [...Array(countMedium)]
    //   .reduce((acc) => {
    //     return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
    //       Math.random() * range
    //     )}px var(--star-color-dark),`;
    //   }, "")
    //   .slice(0, -1);

    // const starsShadowBig = [...Array(countBig)]
    //   .reduce((acc) => {
    //     return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
    //       Math.random() * range
    //     )}px var(--star-color),`;
    //   }, "")
    //   .slice(0, -1);

    // const starsShadowBig = starShadow(countBig, false);

    // const starsShadowBigDark = [...Array(countBig)]
    //   .reduce((acc) => {
    //     return `${acc} ${Math.floor(Math.random() * width)}px ${Math.floor(
    //       Math.random() * range
    //     )}px var(--star-color-dark),`;
    //   }, "")
    //   .slice(0, -1);

    // const starsShadowBigDark = starShadow(countBig, true);

    // Apply the box-shadow to the stars
    starsRef?.style.setProperty("--star-shadow-small", starsShadowSmall);
    starsRef?.style.setProperty(
      "--star-shadow-small-dark",
      starsShadowSmallDark
    );

    stars2Ref?.style.setProperty("--star-shadow-medium", starsShadowMedium);
    stars2Ref?.style.setProperty(
      "--star-shadow-medium-dark",
      starsShadowMediumDark
    );

    stars3Ref?.style.setProperty("--star-shadow-big", starsShadowBig);
    stars3Ref?.style.setProperty("--star-shadow-big-dark", starsShadowBigDark);
  };

  return (
    <>
      <div ref={bgRef} id={style["bg-container"]}>
        <div ref={starsRef} id={style.stars} class={style["star-shadow"]} />
        <div ref={stars2Ref} id={style.stars2} class={style["star-shadow"]} />
        <div ref={stars3Ref} id={style.stars3} class={style["star-shadow"]} />
      </div>
    </>
  );
};

export default Background;
