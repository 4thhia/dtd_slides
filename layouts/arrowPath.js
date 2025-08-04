export function createArrowPathString(points, radius = 20, arrowHeadLength = 8) {
  if (points.length < 2) {
    throw new Error("At least start and end points are required");
  }

  const pathParts = [];
  let [x0, y0] = points[0];
  pathParts.push(`M ${x0} ${y0}`);

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i];
    const dx = x1 - x0;
    const dy = y1 - y0;

    if (dx !== 0 && dy !== 0) {
      throw new Error(`Path from (${x0}, ${y0}) to (${x1}, ${y1}) is not axis-aligned.`);
    }

    const isLastSegment = i === points.length - 1;

    if (isLastSegment) {
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len < arrowHeadLength) {
        throw new Error("Segment too short for arrowhead.");
      }

      const unitX = dx / len;
      const unitY = dy / len;
      const adjustedX = x1 - unitX * arrowHeadLength;
      const adjustedY = y1 - unitY * arrowHeadLength;

      pathParts.push(`L ${adjustedX} ${adjustedY}`);
      break;
    }

    const [x2, y2] = points[i + 1];
    const dir1 = [Math.sign(x1 - x0), Math.sign(y1 - y0)];
    const dir2 = [Math.sign(x2 - x1), Math.sign(y2 - y1)];

    if ((dir1[0] !== 0 && dir2[1] !== 0) || (dir1[1] !== 0 && dir2[0] !== 0)) {
      // 曲がり角：角を丸める処理
      const cornerX = x1 - dir1[0] * radius;
      const cornerY = y1 - dir1[1] * radius;
      pathParts.push(`L ${cornerX} ${cornerY}`);

      const sweepFlag = (dir1[0] * dir2[1] - dir1[1] * dir2[0]) > 0 ? 1 : 0;
      const arcX = x1 + dir2[0] * radius;
      const arcY = y1 + dir2[1] * radius;

      pathParts.push(`A ${radius} ${radius} 0 0 ${sweepFlag} ${arcX} ${arcY}`);

      x0 = arcX;
      y0 = arcY;
    } else {
      throw new Error(`Non-right-angle turn at (${x1}, ${y1})`);
    }
  }

  return pathParts.join(" ");
}
