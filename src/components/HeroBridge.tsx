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

  .bridge-backdrop::after {
    content: '';
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 12%;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(247, 247, 247, 0) 0%,
      rgba(247, 247, 247, .12) 22%,
      rgba(247, 247, 247, .68) 68%,
      var(--hero-handoff) 100%
    );
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

  .horizon-picture, .motus-interface-picture { display: contents; }

  .horizon-wash {
    position: absolute;
    z-index: -2;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(5, 4, 10, .34) 0%, rgba(5, 4, 10, .34) 88%, rgba(5, 4, 10, .16) 94%, rgba(5, 4, 10, 0) 100%),
      radial-gradient(ellipse at 50% 42%, rgba(5, 4, 10, .22) 0%, rgba(5, 4, 10, .12) 36%, rgba(5, 4, 10, 0) 68%),
      linear-gradient(180deg, rgba(7, 7, 14, .65) 0%, rgba(9, 7, 15, .44) 46%, rgba(9, 7, 14, .66) 88%, var(--hero-handoff) 100%);
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

  .bridge-window-shell {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 420px;
    width: min(900px, calc(100% - 44px));
    transform: translateX(-50%);
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, .28);
    border-radius: 8px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, .06) 0%, rgba(255, 255, 255, .12) 52%, rgba(255, 255, 255, .46) 72%, rgba(247, 247, 247, .84) 100%),
      radial-gradient(circle at 12% 8%, rgba(132, 137, 224, .76), rgba(132, 137, 224, 0) 44%),
      radial-gradient(circle at 90% 48%, rgba(213, 105, 72, .56), rgba(213, 105, 72, 0) 48%),
      linear-gradient(135deg, rgba(255, 255, 255, .26), rgba(111, 104, 164, .3) 48%, rgba(255, 255, 255, .22));
    box-shadow: 0 42px 100px rgba(4, 2, 9, .45);
    -webkit-backdrop-filter: blur(18px) saturate(125%);
    backdrop-filter: blur(18px) saturate(125%);
    animation: window-float 7s ease-in-out infinite;
    margin-top: 175px;
    isolation: isolate;
  }

  .bridge-window-shell::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -48px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(104, 113, 211, .34) 0%, rgba(197, 83, 62, .24) 48%, rgba(247, 247, 247, .82) 100%);
    filter: blur(42px);
    opacity: .8;
    pointer-events: none;
  }

  .bridge-window {
    position: relative;
    width: 100%;
    aspect-ratio: 1666 / 944;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 18px;
    background: #121722;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .13) inset;
  }

  .motus-interface-image {
    position: absolute;
    top: -1.5%;
    left: -1.05%;
    width: 102.1%;
    height: 102.9%;
    max-width: none;
  }

  .bridge-scroll {
    position: absolute;
    left: 50%;
    bottom: 18px;
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
    .bridge-window-shell {
      top: auto;
      bottom: -34px;
      width: calc(100% - 14px);
      padding: 10px;
      border-radius: 8px;
      margin-top: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .horizon-art, .bridge-window-shell, .bridge-orb, .bridge-scroll b { animation: none; }
  }
`;

export function HeroBridge() {
  return (
    <>
      <style href="hero-bridge-styles" precedence="default">{heroBridgeStyles}</style>
      <div className="hero-bridge">
        <div className="bridge-backdrop">
          <picture className="horizon-picture">
            <source srcSet="/reference/chromatic-horizon.avif" type="image/avif" />
            <source srcSet="/reference/chromatic-horizon.webp" type="image/webp" />
            <img
              className="horizon-art"
              src="/reference/chromatic-horizon.png"
              width="1672"
              height="941"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt="A dark evening landscape beneath a glowing sunset sky"
            />
          </picture>
          <div className="horizon-wash" />
          <div className="bridge-orb orb-one" />
          <div className="bridge-orb orb-two" />
        </div>
        <div className="bridge-window-shell">
          <div className="bridge-window">
            <picture className="motus-interface-picture">
              <img
                className="motus-interface-image"
                src="/product/motus-interface-tall.png"
                width="1666"
                height="944"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                alt="Motus AI interface with navigation and a single new conversation"
              />
            </picture>
          </div>
        </div>
        <a className="bridge-scroll" href="#product"><span>Explore what Motus can do</span><b>↓</b></a>
      </div>
    </>
  );
}
