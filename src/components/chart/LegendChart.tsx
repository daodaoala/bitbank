import React, {useRef, useEffect} from "react";
import legendChart from "britecharts/dist/umd/legend.min";
import { select } from "d3-selection";

export type DataLegend = {
  id: number;
  quantity: number;
  name: string;
  metadata?: any;
};

export type LegendProps = {
  data: DataLegend[];
};

function createLegendChart( dataset, selector, optionalColorSchema) {
  const legend = legendChart(),
    legendContainer = select(selector),
    containerWidth = legendContainer.node()
      ? legendContainer.node().getBoundingClientRect().width
      : false;

  if (!containerWidth) return;

  legend
    .width(containerWidth * 0.8)
    .height(200)
    .numberFormat("s");

  if (optionalColorSchema) {
    legend.colorSchema(optionalColorSchema);
  }

  legendContainer.datum(dataset).call(legend);
}

export const LegendChart = ({ data }) => {
  const legendRef = useRef(null);

  useEffect(() => {
    createLegendChart(data, legendRef.current, null);
  }, [data]);

  return <div ref={legendRef} />;
};
