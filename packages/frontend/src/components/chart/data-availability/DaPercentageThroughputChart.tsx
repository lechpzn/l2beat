import round from 'lodash/round'
import { useMemo } from 'react'
import type { TooltipProps } from 'recharts'
import { Bar, BarChart } from 'recharts'

import { HorizontalSeparator } from '~/components/core/HorizontalSeparator'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipWrapper,
  useChart,
} from '~/components/core/chart/Chart'
import { ChartDataIndicator } from '~/components/core/chart/ChartDataIndicator'
import { getCommonChartComponents } from '~/components/core/chart/utils/GetCommonChartComponents'
import type { DaThroughputDataPoint } from '~/server/features/data-availability/throughput/getDaThroughputChart'
import { formatTimestamp } from '~/utils/dates'
import { getDaChartMeta } from './meta'

interface Props {
  data: DaThroughputDataPoint[] | undefined
  isLoading: boolean
}
export function DaPercentageThroughputChart({ data, isLoading }: Props) {
  const chartMeta = getDaChartMeta({ shape: 'square' })
  const chartData = useMemo(() => {
    return data?.map(([timestamp, ethereum, celestia, avail]) => {
      const total = ethereum + celestia + avail
      if (total === 0) {
        return {
          timestamp: timestamp,
          ethereum: 0,
          celestia: 0,
          avail: 0,
        }
      }
      return {
        timestamp: timestamp,
        ethereum: round((ethereum / total) * 100, 2),
        celestia: round((celestia / total) * 100, 2),
        avail: round((avail / total) * 100, 2),
      }
    })
  }, [data])

  return (
    <ChartContainer data={chartData} meta={chartMeta} isLoading={isLoading}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 20 }}
        barCategoryGap={0}
      >
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="ethereum"
          stackId="a"
          fill={chartMeta.ethereum.color}
          isAnimationActive={false}
        />
        <Bar
          dataKey="celestia"
          stackId="a"
          fill={chartMeta.celestia.color}
          isAnimationActive={false}
        />
        <Bar
          dataKey="avail"
          stackId="a"
          fill={chartMeta.avail.color}
          isAnimationActive={false}
        />
        {getCommonChartComponents({
          data: chartData,
          isLoading,
          yAxis: {
            unit: '%',
            // To avoid showing 100.000001% we specify domain manually
            domain: [0, 100],
            // And allow data overflow to avoid Y Axis labels being off
            allowDataOverflow: true,
          },
        })}
        <ChartTooltip content={<CustomTooltip />} />
      </BarChart>
    </ChartContainer>
  )
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  const { meta } = useChart()
  if (!active || !payload || typeof label !== 'number') return null

  return (
    <ChartTooltipWrapper>
      <div className="label-value-14-medium text-secondary">
        {formatTimestamp(label, { longMonthName: true, mode: 'datetime' })}
      </div>
      <HorizontalSeparator className="my-1" />
      <div className="flex flex-col gap-2">
        {payload.map((entry, index) => {
          const configEntry = entry.name ? meta[entry.name] : undefined
          if (!configEntry) return null

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-x-6"
            >
              <div className="flex items-center gap-1">
                <ChartDataIndicator
                  backgroundColor={configEntry.color}
                  type={configEntry.indicatorType}
                />
                <span className="label-value-14-medium">
                  {configEntry.label}
                </span>
              </div>
              <span className="label-value-15-medium text-primary tabular-nums">
                {entry.value?.toFixed(2)}%
              </span>
            </div>
          )
        })}
      </div>
    </ChartTooltipWrapper>
  )
}
