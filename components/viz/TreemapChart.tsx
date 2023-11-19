import React from "react";
import { IChart, IDataset } from "../../types";
import styles from "../../styles/Components.module.scss";
import { Treemap as RTreemap, ResponsiveContainer, Tooltip } from "recharts";
import { parseFunc } from "../../utils/parseFunc";
import { ErrorBoundary } from "../layout/ErrorBoundary";
import { palette } from "../../utils/palette";
import { formatNumber } from "../../utils/numberFormatter";

export function TreemapChart(
  props: React.PropsWithChildren<{
    config: IChart;
    data: IDataset;
  }>
) {
  const myGroupingFunction = React.useMemo(() => {
    return parseFunc(props.config.javascriptFunction, (data: IDataset) => data);
  }, [props.config]);

  const processedData = React.useMemo(() => {
    if (typeof myGroupingFunction === "function") {
      const result = myGroupingFunction(props.data);
      return Array.isArray(result) ? result : []; // Pastikan yang dikembalikan adalah array
    }
    return [];
  }, [myGroupingFunction, props.config, props.data]);

  return (
    <ErrorBoundary>
      <ResponsiveContainer width="100%" height="100%">
        <RTreemap
          width={400}
          height={200}
          data={processedData.map((d) => ({ name: d.x, value: d.y }))}
          stroke="var(--textColor)"
          fill={palette[0]}
        >
          <Tooltip
            formatter={(d, name, item) => {
              return [
                formatNumber(item.payload.value as number),
                item.payload.name,
              ];
            }}
          />
        </RTreemap>
      </ResponsiveContainer>
    </ErrorBoundary>
  );
}

