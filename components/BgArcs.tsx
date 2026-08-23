import type { SectionProps } from '@/lib/props';

export default function BgArcs({ v }: Pick<SectionProps, 'v'>) {
  return (
    <>
      <div className="l2-bg-arcs" style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        height: "100%",
        backgroundImage: "url(\"/img/bg-arcs.webp\")",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        pointerEvents: "none",
        zIndex: "0",
        transform: v.bgArcsTransform,
      }}></div>
    </>
  );
}
