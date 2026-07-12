const LightRaysOverlay = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "repeating-linear-gradient(115deg, transparent 0px, rgba(255,255,255,0.35) 100px, transparent 200px, rgba(51,14,0,0.12) 300px, transparent 400px)",
        mixBlendMode: "overlay",
      }}
    />
  </div>
);

export default LightRaysOverlay;
