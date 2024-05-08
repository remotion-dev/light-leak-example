import type {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
import React, { useMemo } from "react";
import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

type LightLeakPresentationProps = {
  presentationDuration: number;
};

export const LightLeakPresentation: React.FC<
  TransitionPresentationComponentProps<LightLeakPresentationProps>
> = ({
  children,
  presentationDirection,
  presentationProgress,
  passedProps: { presentationDuration },
}) => {
  const playbackRate = 80 / presentationDuration;
  const showNewVideo = presentationProgress > 0.3625;

  const opacity = useMemo(() => {
    if (presentationDirection === "exiting" && showNewVideo) {
      return 0;
    }

    if (presentationDirection === "entering" && !showNewVideo) {
      return 0;
    }

    return 1;
  }, [presentationDirection, showNewVideo]);

  const style: React.CSSProperties = useMemo(() => {
    return {
      width: "100%",
      height: "100%",
      opacity,
    };
  }, [opacity]);

  const overlayStyle: React.CSSProperties = useMemo(() => {
    return {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };
  }, []);

  return (
    <AbsoluteFill>
      <AbsoluteFill style={style}>{children}</AbsoluteFill>
      {presentationDirection === "entering" && (
        <AbsoluteFill style={{ mixBlendMode: "screen" }}>
          <OffthreadVideo
            style={overlayStyle}
            playbackRate={playbackRate}
            src={staticFile("light-leak.webm")}
          />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

export const lightLeak = (
  props: LightLeakPresentationProps
): TransitionPresentation<LightLeakPresentationProps> => {
  return { component: LightLeakPresentation, props };
};
