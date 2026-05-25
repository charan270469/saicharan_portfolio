import prBwlow1 from "./pr_bwlow.png";
import vector from "./PORTFOLIO.svg";

export const VisualDesigner = (): JSX.Element => {
  const navItems = [
    { label: "SOCIAL MEDIA DESIGN" },
    { label: "PITCH DECK DESIGN" },
    { label: "BRANDING" },
    { label: "UI/UX DESIGN" },
    { label: "AMAZON LISTING IMAGE & EBC CONTENT DESIGN" },
  ];

  return (
    <div className="w-full min-w-[1440px] min-h-[810px] relative">
      <div className="absolute top-0 left-0 w-[1440px] h-[810px] bg-[linear-gradient(0deg,rgba(30,29,28,1)_0%,rgba(30,29,28,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="absolute top-[37px] left-20 w-[1280px] h-[736px] flex rounded-3xl overflow-hidden border border-solid border-[#d2b48b4c] shadow-[0px_25px_50px_-12px_#00000040,0px_0px_0px_transparent,0px_0px_0px_transparent] [background:radial-gradient(50%_50%_at_50%_50%,rgba(58,54,52,1)_0%,rgba(32,30,29,1)_100%),linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_100%)]">
          <div className="mt-[135px] w-[1278px] h-[600px] ml-px flex flex-col gap-5">
            <p className="ml-[1090.5px] w-[150px] h-12 [font-family:'Inter-Light',Helvetica] font-light text-[#d1d4db] text-[15.5px] text-right tracking-[0] leading-6">
              Code that thinks.
              <br />
              Systems that Scale.
            </p>
            <div className="ml-7 w-[1222px] h-60 bg-[linear-gradient(128deg,rgba(201,138,94,1)_0%,rgba(254,221,177,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-90 [font-family:'Inter-Black',Helvetica] font-black text-transparent text-[220px] text-center tracking-[-8.00px] leading-[240px] whitespace-nowrap">
              PORTFOLIO
            </div>
          </div>
        </div>
        <div className="absolute top-[172px] left-[117px] w-[197px] h-14 flex flex-col">
          <div className="h-8 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#d2b48b] text-[24.3px] tracking-[0.60px] leading-8 whitespace-nowrap">
            SAI CHAR
          </div>
          <div className="h-6 [font-family:'Inter-Light',Helvetica] font-light text-[#d1d4db] text-[16.1px] tracking-[0] leading-6 whitespace-nowrap">
            Detach &amp; do it...
          </div>
        </div>
        <div className="absolute top-[640px] left-[81px] w-[1278px] h-[132px] flex gap-[171px]">
          <div className="mt-[-26px] w-[672px] h-[143px] ml-[35px] flex flex-col gap-4">
            <div className="w-[300px] h-6 flex gap-2.5">
              <a
                className="mt-[5px] w-[137px] flex gap-2.5"
                href="https://github.com/charan270469"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="mt-px w-[17px] h-[17px] flex">
                  <img
                    className="mt-px w-4 h-[15px] ml-px"
                    alt="Vector"
                    src={vector}
                  />
                </span>
                <span className="-mt-px w-[110px] h-5 [font-family:'Inter-Medium',Helvetica] font-medium text-[#e4e7eb] text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                  charan270469
                </span>
              </a>
              <a
                className="mt-[5px] w-[93px] flex gap-3"
                href="https://www.linkedin.com/in/sai-charan-77071b281/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="mt-px w-4 h-4 bg-[url(/image.svg)] bg-[100%_100%]" />
                <span className="-mt-0.5 w-[65px] h-5 [font-family:'Inter-Medium',Helvetica] font-medium text-[#e4e7eb] text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                  saicharan
                </span>
              </a>
            </div>
            <p className="w-[387px] h-[60px] [font-family:'Inter-Light',Helvetica] font-light text-[#d1d4db] text-[13px] tracking-[0] leading-5">
              Between data and intelligence lies the space where I build. From
              engineering LLM pipelines to architecting agentic systems, my work
              revolves around precision, scalability, and real-world impact.
              Through every project, I help ideas evolve into systems that
              think, adapt, and deliver with purpose.
            </p>
          </div>
          <div className="w-[363px] h-[100px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#d2b48b] text-[48.1px] text-right tracking-[2.40px] leading-[48px]">
            DEVELOPER &amp; DESIGNER
          </div>
        </div>
        <nav className="absolute top-[70px] left-[232px] w-[975px] h-[38px] flex items-center bg-[#1f1e1d80] rounded-full border border-solid border-[#d2b48b66]">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="mt-0 px-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#d2b48b] text-xs text-center tracking-[1.20px] leading-4 whitespace-nowrap first:ml-[25px]"
                style={{ marginLeft: index === 0 ? "25px" : "12px" }}
              >
                {item.label}
              </div>
              {index < navItems.length - 1 && (
                <div className="w-1 h-1 ml-[11.8px] bg-[#d2b48b] rounded-full flex-shrink-0" />
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="absolute top-[118px] left-[459px] w-[523px] h-[654px] flex justify-center">
        <img
          className="w-[531px] h-[662px] ml-2 aspect-[0.8]"
          alt="Pr bwlow"
          src={prBwlow1}
        />
      </div>
    </div>
  );
};
