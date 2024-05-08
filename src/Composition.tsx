import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { Img, staticFile } from "remotion";
import { lightLeak } from "./presentation";

const DURATION = 80;

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
          durationInFrames: DURATION,
        })}
        presentation={lightLeak({
          presentationDuration: DURATION,
        })}
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
