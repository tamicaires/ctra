import star from "@/assets/star.png";

interface StarProps {
  width?: number;
  height?: number;
}

export function Star({ width, height }: StarProps) {
  return (
    <img src={star} width={width || 15} height={height || 15} alt="star--v1" />
  );
}
