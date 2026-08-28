"use client"

import { MoveUpRight } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

// 차트 데이터
const chartData = [
  {
    month: 'Apr 2025', // 라벨
    paid: 1050, // paid 값
    checkout: 1450 // checkout 값
  },
  {
    month: 'May 2025',
    paid: 1250,
    checkout: 1700
  },
  {
    month: 'Jun 2025',
    paid: 950,
    checkout: 1350
  },
  {
    month: 'Jul 2025',
    paid: 890,
    checkout: 1300
  },
  {
    month: 'Aug 2025',
    paid: 1550,
    checkout: 1150
  },
  {
    month: 'Sep 2025',
    paid: 1900,
    checkout: 1500
  },
  {
    month: 'Oct 2025',
    paid: 1650,
    checkout: 1300
  }
];

// 차트 설정
const chartConfig = {
  paid: {
    label: 'Paid',
    color: '#325cff'
  },
  checkout: {
    label: 'Checkout',
    color: '#35ade9'
  },
} satisfies ChartConfig;

export default function VerticalBarChart() {
  return (
    <Card className="w-full h-full py-3 bg-[#101211] border-[#282b2a] text-white gap-0">
      {/* 카드 상단 */}
      <CardHeader className="px-4">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-[#3a261b] rounded-full flex items-center justify-center">
            <MoveUpRight className="size-4 text-[#c4735f]" />
          </div>
          <span className="text-white text-lg">
            Customers Activity
          </span>

          {/* 비고 */}
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="size-4 rounded-sm bg-[#325cff]" />
              <span className="text-white text-sm">Paid Product</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-4 rounded-sm bg-[#35ade9]" />
              <span className="text-white text-sm">Checkout Product</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 px-4">
        <ChartContainer config={chartConfig} className="w-full h-80">
          {/* 차트 */}
          <BarChart accessibilityLayer data={chartData} barGap={4}>
            {/* x축 */}
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: '#8b8e8d', fontSize: 12 }} // 축 글자 색상, 크기
            />
            {/* y축 */}
            <YAxis
              domain={[500, 2000]} // 좌표 범위
              ticks={[500, 1000, 1500, 2000]} // 표시할 좌표 값
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#8b8e8d', fontSize: 12 }}
            />
            {/* 툴팁 */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" labelFormatter={() => 'Activity'} />}
            />
            <Bar
              dataKey="paid" // 키
              fill="#282b2a" // 기본 색상
              activeBar={{ fill: 'var(--color-paid)' }} // 호버 색상
              radius={6} // 굴곡
              barSize={36} // 너비
            />
            <Bar
              dataKey="checkout"
              fill="#282b2a"
              activeBar={{ fill: 'var(--color-checkout)' }}
              radius={6}
              barSize={36}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
