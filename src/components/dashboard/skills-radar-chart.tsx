"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export const SkillsRadarChart = () => {
  const skills = [
    { name: "React", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "Node.js", value: 75 },
    { name: "UI/UX", value: 80 },
    { name: "Testing", value: 70 },
    { name: "DevOps", value: 60 },
  ];

  const centerX = 150;
  const centerY = 150;
  const radius = 120;

  const skillPoints = skills.map((skill, i) => {
    const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
    const value = skill.value / 100;
    return {
      x: centerX + radius * value * Math.cos(angle),
      y: centerY + radius * value * Math.sin(angle),
      name: skill.name,
      value: skill.value,
    };
  });

  const polygonPoints = skillPoints
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">Skills Radar</h2>
        <p className="text-default-500 text-sm">
          Technical proficiency overview
        </p>
      </CardHeader>
      <Divider />
      <CardBody className="p-4 md:p-6 flex items-center justify-center">
        <svg width="300" height="300" viewBox="0 0 300 300">
          {/* Background circles */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={radius * scale}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth="1"
            />
          ))}

          {/* Axis lines */}
          {skills.map((_, i) => {
            const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
            return (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={centerX + radius * Math.cos(angle)}
                y2={centerY + radius * Math.sin(angle)}
                stroke="currentColor"
                strokeOpacity={0.2}
                strokeWidth="1"
              />
            );
          })}

          {/* Data polygon */}
          <polygon
            points={polygonPoints}
            fill="rgba(var(--heroui-primary-500), 0.2)"
            stroke="hsl(var(--heroui-primary-500))"
            strokeWidth="2"
          />

          {/* Data points */}
          {skillPoints.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="hsl(var(--heroui-primary-500))"
            />
          ))}

          {/* Skill labels */}
          {skills.map((skill, i) => {
            const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
            const labelRadius = radius + 20;
            const x = centerX + labelRadius * Math.cos(angle);
            const y = centerY + labelRadius * Math.sin(angle);
            let textAnchor = "middle";
            if (angle > -Math.PI * 0.25 && angle < Math.PI * 0.25)
              textAnchor = "start";
            else if (angle > Math.PI * 0.75 || angle < -Math.PI * 0.75)
              textAnchor = "end";

            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                fontSize="12"
                fontWeight="500"
              >
                {skill.name}
              </text>
            );
          })}
        </svg>
      </CardBody>
    </Card>
  );
};
