import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";

interface TabData {
  label: string;
  content: React.ReactNode;
}

interface ReusableTabsProps {
  tabs: string[];
  tabsData: TabData[];
}

const ReusableTabs = ({ tabs, tabsData }: ReusableTabsProps) => {
  return (
    <div className=" w-full min-h-[100vh] h-full">
      <Tabs className="p-0" defaultValue={tabs[0]}>
        <TabsList className="w-full gap-2 bg-white py-10">
          <div className="max-w-[1280px] mx-auto w-full flex items-center justify-start gap-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <TabsTrigger
                className="flex-shrink-0 text-[#4B4B4B] text-base data-[state=active]:text-[#4B4B4B] data-[state=active]:bg-[#E7D8D4] py-2.5 px-4 rounded-3xl h-fit"
                key={index}
                value={tab}
              >
                {tab}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        <div className="px-2 h-full py-16">
          <div className="max-w-[1280px] mx-auto border-2 border-dashed border-[#EEEEEE] bg-white p-3 md:p-6">
            {tabsData.map((tabData, index) => (
              <TabsContent key={index} value={tabData.label} className="">
                {tabData.content}
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ReusableTabs;
