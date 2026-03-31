import { Marquee } from "./marquee";

export function MarqueeDemo() {
  const integrations = [
    "Pipedrive", "HubSpot", "Salesforce", "WhatsApp API", 
    "ActiveCampaign", "RD Station", "Zapier", "Meta Ads",
    "Google Ads", "Slack", "Trello", "LinkedIn"
  ];

  return (
    <div className="py-4 w-full">
      <Marquee pauseOnHover duration={30} fadeAmount={20}>
        {integrations.map((item, i) => (
          <div key={i} className="mx-8 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-brand-blue"></div>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
