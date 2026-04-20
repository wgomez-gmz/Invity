import type { CSSProperties } from "react";
import type { WeddingBackgroundSpec } from "@/features/templates/wedding/templateTypes";

export type RubyMotionReveal = Record<string, unknown>;

export function renderAddress(lines: string[]) {
  return lines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

export function renderParentLines(lines: string[]) {
  return lines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

function resolveBackgroundValue(spec?: WeddingBackgroundSpec): string | undefined {
  if (!spec) {
    return undefined;
  }

  if (spec.type === "color" || spec.type === "gradient" || spec.type === "layers") {
    return spec.value;
  }

  const position = spec.position ?? "center center";
  const size = spec.size ?? "cover";
  const repeat = spec.repeat ?? "no-repeat";
  const attachment = spec.attachment ? ` ${spec.attachment}` : "";
  const imageLayer = `url(${spec.src}) ${position} / ${size} ${repeat}${attachment}`.trim();

  return spec.overlay ? `${spec.overlay}, ${imageLayer}` : imageLayer;
}

export function resolveBackgroundStyle(spec?: WeddingBackgroundSpec): CSSProperties | undefined {
  const background = resolveBackgroundValue(spec);

  if (!background) {
    return undefined;
  }

  return {
    background,
  } as CSSProperties;
}
