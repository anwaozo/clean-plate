import React from "react";

const statisticsData = [
  {
    value: "30+",
    text: "ACTIVE LUXURY LISTINGS",
  },
  {
    value: " $1.2M",
    text: "AVERAGE LIST PRICE",
  },
  {
    value: " 12%",
    text: "FASTER HOME SALES",
  },
  {
    value: "60+",
    text: "SALES",
  },
];
const Statistics = () => {
  return (
    <section className="  font-tiempos max-w-[1200px] md:mx-auto w-fit px-4 md:px-0 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-20 ">
      {statisticsData.map((statistic, index) => {
        const words = statistic.text.trim().split(" ");
        return (
        <div
          data-aos="fade-up"
          data-aos-delay={index * 100}
          key={index}
          className={`h-full md:px-6 lg:px-12 pb-4 md:pb-0 ${
          index < 3
            ? "border-b-2 md:border-b-0 md:border-r-2 border-black"
            : "border-none"
          }`}
        >
          <div className="text-4xl md:text-4xl lg:text-[56px] font-bold text-black mb-[107px]">
          {statistic.value}
          </div>
          <div className="text-base font-archivo font-semibold text-black tracking-wide max-w-[165px]">
          {words.length >= 3 ? (
            <>
            {words[0]} {words[1]} <br />
            {words[2]}
            </>
          ) : (
            statistic.text
          )}
          </div>
        </div>
        );
      })}
      </div>
    </section>
  );
};

export default Statistics;
