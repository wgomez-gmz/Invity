export function renderLines(lines: string[]) {
  return lines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}
