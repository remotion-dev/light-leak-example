import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { Img, staticFile } from "remotion";
import { fade } from "@remotion/transitions/fade";

export const MyComposition = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={100}>
        <Img
          style={{
            objectFit: "cover",
            width: "100%",
          }}
          src={staticFile("a.jpg")}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={linearTiming({
          durationInFrames: 40,
        })}
        presentation={fade()}
      />
      <TransitionSeries.Sequence durationInFrames={100}>
        <Img
          style={{
            objectFit: "cover",
            width: "100%",
          }}
          src={staticFile("b.jpg")}
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
