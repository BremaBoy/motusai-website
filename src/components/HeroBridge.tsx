const heroBridgeStyles = `
  .hero-bridge {
    position: absolute;
    z-index: 0;
    inset: 0;
    height: 100%;
    overflow: visible;
    background: #100d17;
  }

  .bridge-backdrop {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: #100d17;
    isolation: isolate;
  }

  .horizon-art {
    position: absolute;
    z-index: -3;
    inset: -2%;
    width: 104%;
    height: 104%;
    max-width: none;
    object-fit: cover;
    animation: horizon-drift 18s ease-in-out infinite alternate;
  }

  .horizon-wash {
    position: absolute;
    z-index: -2;
    inset: 0;
    background:
      radial-gradient(ellipse at 50% 42%, rgba(5, 4, 10, .22) 0%, rgba(5, 4, 10, .12) 36%, rgba(5, 4, 10, 0) 68%),
      linear-gradient(180deg, rgba(7, 7, 14, .65) 0%, rgba(9, 7, 15, .44) 46%, rgba(9, 7, 14, .66) 72%, #f7f7f7 100%);
  }

  .bridge-orb {
    position: absolute;
    z-index: -1;
    width: 290px;
    height: 290px;
    border-radius: 50%;
    filter: blur(72px);
    opacity: .24;
    mix-blend-mode: screen;
    animation: orb-drift 10s ease-in-out infinite alternate;
  }

  .orb-one { left: 8%; top: 19%; background: #5e63b8; }
  .orb-two { right: 7%; top: 31%; background: #bf4b30; animation-delay: -4s; }

  .bridge-window {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 405px;
    width: min(860px, calc(100% - 64px));
    aspect-ratio: 1643 / 825;
    transform: translateX(-50%);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 18px;
    background: #121722;
    box-shadow: 0 42px 100px rgba(4, 2, 9, .5), 0 1px 0 rgba(255, 255, 255, .13) inset;
    animation: window-float 7s ease-in-out infinite;
    margin-top: 150px;
  }

  .motus-interface-image {
    position: absolute;
    top: -4.36%;
    left: -2.31%;
    width: 104.63%;
    height: 110.91%;
    max-width: none;
  }

  .bridge-scroll {
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 12px;
    color: #5f555f;
    font-size: 10px;
  }

  .bridge-scroll b {
    width: 29px;
    height: 29px;
    border: 1px solid rgba(50, 35, 55, .18);
    border-radius: 50%;
    display: grid;
    place-items: center;
    animation: arrow-bob 1.8s ease-in-out infinite;
  }

  @keyframes horizon-drift {
    from { transform: scale(1.02) translate3d(-.8%, 0, 0); }
    to { transform: scale(1.07) translate3d(.8%, -1%, 0); }
  }

  @keyframes window-float {
    0%, 100% { transform: translateX(-50%) translateY(0) rotateX(0); }
    50% { transform: translateX(-50%) translateY(-11px) rotateX(1deg); }
  }

  @keyframes orb-drift {
    from { transform: translate3d(-20px, 0, 0) scale(.9); }
    to { transform: translate3d(35px, 28px, 0) scale(1.14); }
  }

  @keyframes arrow-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(5px); }
  }

  @media (max-width: 760px) {
    .hero-bridge { height: 100%; }
    .bridge-window {
      top: auto;
      bottom: -24px;
      width: calc(100% - 34px);
      margin-top: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .horizon-art, .bridge-window, .bridge-orb, .bridge-scroll b { animation: none; }
  }
`;

export function HeroBridge() {
  return (
    <>
      <style href="hero-bridge-styles" precedence="default">{heroBridgeStyles}</style>
      <div className="hero-bridge">
        <div className="bridge-backdrop">
          <img className="horizon-art" src="/reference/chromatic-horizon.png" alt="A dark evening landscape beneath a glowing sunset sky" />
          <div className="horizon-wash" />
          <div className="bridge-orb orb-one" />
          <div className="bridge-orb orb-two" />
        </div>
        <div className="bridge-window">
          <img
            className="motus-interface-image"
            src="/product/motus-interface.png"
            alt="Motus AI interface with navigation and a single new conversation"
          />
        </div>
        <a className="bridge-scroll" href="#products"><span>Explore possibilities</span><b>↓</b></a>
      </div>
    </>
  );
}
